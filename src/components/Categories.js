import React from 'react';
import { useSelector } from 'react-redux';

function Categories() {
  const cat = useSelector((state) => state.status);
  return (
    <div>
      <h1>{cat.status}</h1>
      <h1>ryryryryryr</h1>
    </div>
  );
}

export default Categories;
