/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooksAsync } from '../redux/books/book1';

function BookList() {
  const dispatch = useDispatch();

  const book = useSelector((state) => state.book);
  const unpackedBooks = Object.values(book).map((item) => item[0]);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);

  return (
    <>
      <div>
        <Form />
      </div>
      <ul>
        {unpackedBooks.map((book) => (
          <Book title={book.title} item_id={book.item_id} key={Math.random() * 1000} author={book.author} />
        ))}
      </ul>
    </>
  );
}

export default BookList;
