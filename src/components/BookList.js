import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.book);
  return (
    <>
      <div>
        <Form />
      </div>
      <ul>
        {books.map((book) => (
          <Book title={book.title} key={book.id} id={book.id} />
        ))}
      </ul>
    </>
  );
}

export default BookList;
