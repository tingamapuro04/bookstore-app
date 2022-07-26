import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [values, setValues] = useState({
    title: '',
    author: '',
  });
  const dispatch = useDispatch();
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addBook(
        value,
      ),
    );
  };

  return (
    <div className="form">
      <h1 className="form-title">ADD NEW BOOK</h1>
      <form onSubmit={onSubmit}>
        <input required value={values.title} name="title" onChange={handleValue} type="text" placeholder="Book title" />
        <input valeu={values.author} name="author" required type="text" placeholder="Author" />
        <button type="submit" className="form-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
