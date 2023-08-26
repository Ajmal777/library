import React , { useContext } from 'react';
import './App.css';
import MoreBooks from './Components/MoreBooks';
import Navbar from './Components/Navbar';
import BooksContext from './Context/BooksContext';
import BookDetails from './Components/BookDetails';

function App() {
  const {activeBook} = useContext(BooksContext);

  return (
    <div className="App">
      <Navbar />      
      {activeBook && <BookDetails />}
      <MoreBooks />
    </div>
  );
}

export default App;
