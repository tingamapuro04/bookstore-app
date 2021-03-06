import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Book from './components/Book';

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Book title="Title" author="Author" />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
