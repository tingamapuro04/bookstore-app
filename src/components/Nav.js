import React from 'react';
import { Link } from 'react-router-dom';
// import { BsPerson } from 'react-icons/bs';
import user from '../img/user.png';

function Nav() {
  return (
    <nav className="Navigation">
      <h1 href="/" className="title">Bookstore CMS</h1>
      <ul className="title-list">
        <li>
          <Link to="/" className="BOOKS">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="CATEGORIES">CATEGORIES</Link>
        </li>
      </ul>
      <img className="user" src={user} alt="user" />
      {/* <a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by kmg design - Flaticon</a>
      <button className="Oval" type="button">
        {' '}
        <span className="Mask"><BsPerson /></span>
        {' '}
      </button> */}
    </nav>
  );
}

export default Nav;
