import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [values, setValues] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleTitleValue = (e) => {
    setValues({ ...values, title: e.target.value });
  };

  const handleAuthorValue = (e) => {
    setValues({ ...values, author: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook(
        values.title,
        values.author,
      ),
    );
  };

  return (
    <div className="form">
      <h1 className="form-title">ADD NEW BOOK</h1>
      <form onSubmit={onSubmit}>
        <input required value={values.title} name="title" onChange={handleTitleValue} type="text" placeholder="Book title" />
        <input onChange={handleAuthorValue} value={values.author} name="author" required type="text" placeholder="Author" />
        <button type="submit" className="form-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
