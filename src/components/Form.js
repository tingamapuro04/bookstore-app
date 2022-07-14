import React from 'react';
import Button from './Button';

function form() {
  return (
    <div className="form">
      <h1 className="form-title">ADD NEW BOOK</h1>
      <form>
        <input type="text" placeholder="Book title" />
        <input type="text" placeholder="Author" />
        <button type="button" className="form-btn">ADD BOOK</button>
      </form>
    </div>
  )
}

export default form
