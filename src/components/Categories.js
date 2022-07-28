import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

function Categories() {
  const dispatch = useDispatch();

  const dispalyCat = () => {
    dispatch(checkStatus());
  };

  const cat = useSelector((state) => state.status);
  return (
    <div>
      {cat.map((item) => (
        <h1 key={item.id}>{item.status}</h1>
      ))}
      <button onClick={dispalyCat} type="button" className="status-btn">Check Status</button>
    </div>
  );
}

export default Categories;
