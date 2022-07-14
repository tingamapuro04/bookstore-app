import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Form from './Form';

function Book({ title, author }) {
  return (
    <>
      <div className="Book">
        {' '}
        {title}
        <br />
        {author}
        {' '}
        <Button name="Remove" />
      </div>
      <hr />
      <div>
        <Form />
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
