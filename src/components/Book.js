import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import Butto from './Button';
import { removeBookAsync } from '../redux/books/book1';

function Book({
  itemId, title, author, category,
}) {
  const dispatch = useDispatch();

  const deleteBook = () => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <>
      <li className="Lesson-Panel">
        <div className="Book">
          <div className="tinga">
            <p className="Action">{category}</p>
            <h2 className="Kichwa">{title}</h2>
            <p className="Author">{author}</p>
          </div>
          <div className="btns">
            <button className="comments" type="button">Comments</button>
            {/* <Button name="Remove" clickMe={deleteBook} /> */}
            <button className="remove" type="button" onClick={deleteBook}>Remove</button>
            <button className="edit" type="button">Edit</button>
          </div>
        </div>
        <div className="Book-info">
          <div className="Book-Percentage">
            <div className="Progress-Percentage" />
            <div className="Percentage-p">
              <p className="Percentage-1">65%</p>
              <p className="Percentage-2">Completed</p>
            </div>
          </div>
          <div className="vertical-separator">
            <p className="try">|</p>
          </div>
          <div className="Book-last">
            <p className="current">CURRENT CHAPTER</p>
            <p className="Chapter">Chapter 10</p>
            <button className="Update" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </li>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
