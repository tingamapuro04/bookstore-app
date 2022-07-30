import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { getBooksAsync } from '../redux/books/book1';

function BookList() {
  const dispatch = useDispatch();

  const book1 = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooksAsync());
  }, [dispatch]);
  return (

    <>
      <div>
        <Form />
      </div>
      <ul>
        {book1.map((book) => (
          <Book
            title={book.title}
            itemId={book.item_id}
            key={Math.random() * 1000}
            author={book.author}
          />
        ))}
      </ul>
    </>
  );
}

export default BookList;
