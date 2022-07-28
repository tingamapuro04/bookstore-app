import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
// import Book from './components/Book';
import BookList from './components/BookList';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
