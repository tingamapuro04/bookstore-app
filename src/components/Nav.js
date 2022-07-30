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
    </nav>
  );
}

export default Nav;
