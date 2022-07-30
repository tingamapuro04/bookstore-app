import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { removeBookAsync } from '../redux/books/book1';

function Book({ itemId, title, author }) {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <>
      <li>
        <div className="Book">
          <input type="checkbox" />
          {' '}
          <div className="tinga">
            {title}
            {'  '}
            {author}
          </div>
          {' '}
          <Button name="Remove" clickMe={deleteBook} />
        </div>
        <hr />
      </li>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
