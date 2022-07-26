/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from './Button';
import { removeBook } from '../redux/books/books';

function Book({ id, title }) {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBook(id));
  };

  return (
    <>
      <li>
        <div className="Book">
          <input type="checkbox" />
          {' '}
          <h4>
            {title}
            {'  '}
          </h4>
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
};

export default Book;
