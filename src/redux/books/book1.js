/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Bprdxe14OldQ8ZgxdRDq/books',
    );
    if (response.ok) {
      const books = await response.json();
      return { books };
    }
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addbooksasync',
  async (payload) => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Bprdxe14OldQ8ZgxdRDq/books',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          item_id: payload.item_id,
          title: payload.title,
          author: payload.author,
          category: payload.category,
        }),
      },
    );
    await response.text();
    return payload;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: state.length + 1,
        title: action.payload.title,
        author: action.payload.author,
      };
      return [...state, newBook];
    },
    removeBook: (state, action) => state.filter((book) => book.item_id !== action.item_id),
  },
  extraReducers: {
    [getBooksAsync.fulfilled]: (state, action) => action.payload.books,
    [addBookAsync.fulfilled]: (state, action) => {
      state[action.payload.item_id] = [{
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
