import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getBooksAsync = createAsyncThunk(
  'books/getBooksAsync',
  async () => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4RU883MX0IeSISj3yFzw/books',
    );
    const data = await response.json();
    const entries = Object.entries(data);
    const books = entries.map((element) => ({
      item_id: element[0],
      title: Object.assign(...element[1]).title,
      author: Object.assign(...element[1]).author,
      category: Object.assign(...element[1]).category,
    }));
    return books;
  },
);

export const addBookAsync = createAsyncThunk(
  'books/addbooksasync',
  async (payload, bookstoreapi) => {
    const response = await fetch(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4RU883MX0IeSISj3yFzw/books',
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
    bookstoreapi.dispatch(getBooksAsync());
    return payload;
  },
);

export const removeBookAsync = createAsyncThunk(
  'books/removeBooksAsync',
  async (id, bookstoreapi) => {
    const response = await fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4RU883MX0IeSISj3yFzw/books/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    const book = await response.text();
    bookstoreapi.dispatch(getBooksAsync());
    return book;
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
  },
  extraReducers: {
    [getBooksAsync.fulfilled]: (state, action) => action.payload,
    [addBookAsync.fulfilled]: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state[action.payload.item_id] = [{
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      }];
    },
    [removeBookAsync.fulfilled]:
    (state, action) => state.filter((book) => book.item_id !== action.payload.item_id),
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
