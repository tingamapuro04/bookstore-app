import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
// import Form from './Form';

function Book({ title }) {
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
          <Button name="Remove" />
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
