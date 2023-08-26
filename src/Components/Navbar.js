import React, { useState, useEffect , useContext } from "react";
import axios from "axios";
import BooksContext from '../Context/BooksContext';

const Navbar = () => {
    const [input, setInput] = useState("");
    const {booksList, setBooksList, setError} = useContext(BooksContext);

    useEffect(()=>{
      async function fetchData(){
        try{
          const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
          const res2 = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Sherlock+Holmes`)
          console.log(res.data.items[0]);
          setBooksList(res.data.items.concat(res2.data.items));
        }
        catch(error){
          setError(error.response.data.error.message);
          console.log(error);
        }
      }
      fetchData();
    }, [])


    async function searchBooks(){
      try{
        const res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        setBooksList(res.data.items);
      }
      catch(error){
        setError(error.response.data.error.message);
        console.log(error);
      }
    }

    return (
        <div className="navbar">
            <div className="brand"></div>
            <div className="search">
                <div className="searchbar">
                    <span>O</span>
                    <input
                        type="text"
                        id="searchBar"
                        placeholder="Search for the book you want and read it now."
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button onClick={searchBooks}>Search</button>
            </div>
            <div className="navLinks">
                <div className="link"></div>
                <div className="link"></div>
                <div className="link"></div>
                <div className="link"></div>
            </div>
        </div>
    );
};

export default Navbar;
