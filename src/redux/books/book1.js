/* eslint-disable consistent-return */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qt6muGB5kLteBCWeTDIt/books');
    if (response.ok) {
      const books = await response.json();
      return { books };
    }
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
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
