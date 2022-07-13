import React from 'react';

function Nav() {
  return (
    <nav>
      <a href="/" className="title">Bookstore CMS</a>
      <ul className="title-list">
        <li><a href="/" className="books">BOOKS</a></li>
        <li><a href="/" className="cats">CATEGORIES</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
