import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './categories/categories';
import bookReducer from './books/book1';

const store = configureStore({
  reducer: {
    status: statusReducer,
    book: bookReducer,
  },
});

export default store;
