import React , { useContext } from 'react';
import './App.css';
import MoreBooks from './Components/MoreBooks';
import Navbar from './Components/Navbar';
import BooksContext from './Context/BooksContext';
import BookDetails from './Components/BookDetails';

function App() {
  const {activeBook , error} = useContext(BooksContext);
  console.log("Error: ", error);
  return (
    <div className="App">
      <Navbar />      
      {!error && activeBook && <BookDetails />}
      {!error && <MoreBooks />}
      {error && <p style={{color: 'red', fontSize: '20px', textAlign: 'center'}}>{error}</p>}
    </div>
  );
}

export default App;
