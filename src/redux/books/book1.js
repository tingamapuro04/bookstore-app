import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'books',
  initialState: [
    { id: 1, title: 'River', author: 'tinga' },
    { id: 2, title: 'yeyey', author: 'mapuro' },
  ],
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        id: state.length + 1,
        title: action.payload.title,
        author: action.payload.author,
      };
      return [...state, newBook];
    },
    removeBook: (state, action) => state.filter((book) => book.id !== action.id),
  },
});

export const { removeBook, addBook } = booksSlice.actions;
export default booksSlice.reducer;
