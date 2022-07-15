import React from 'react';
import { Link } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';

function Nav() {
  return (
    <nav>
      <h1 href="/" className="title">Bookstore CMS</h1>
      <ul className="title-list">
        <li>
          <Link to="/" className="books">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories" className="cats">CATEGORIES</Link>
        </li>
      </ul>
      <VscAccount />
    </nav>
  );
}

export default Nav;
