import { configureStore } from '@reduxjs/toolkit';
import statusReducer from './categories/categories';
import reducer from './books/books';

const store = configureStore({
  reducer: {
    status: statusReducer,
    book: reducer,
  },
});

export default store;
