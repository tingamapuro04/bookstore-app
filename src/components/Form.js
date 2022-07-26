import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('90');
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
        <input value={value} onChange={handleValue} type="text" placeholder="Book title" />
        <button type="submit" className="form-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
