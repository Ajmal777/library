import brand from '../Resources/brand-icon.svg'
import favourites from '../Resources/favourites-icon.svg'
import notification from '../Resources/notification-icon.svg'
import premium from '../Resources/premium-icon.svg'
import user from '../Resources/user-profile.svg'
import { AiOutlineSearch } from "react-icons/ai";

import React, { useState, useEffect , useContext } from "react";
import axios from "axios";
import BooksContext from '../Context/BooksContext';

import '../Styles/navbar.css'


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


    function searchBooks(){
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${input}`)
        .then(res => {
          if(res.data.totalItems > 0){ 
            setBooksList(res.data.items);
            setError('');
          }
          else{
            setError("No items found");
            setBooksList([]);
          }
        })
        .catch(error => {
          setError(error.response.data.error.message);
          setBooksList([]);
          console.log(error);
        })
      }

    return (
        <div className="navbar">
            <div className="brand">
              <img src={brand} alt="" />
              <span id='brand-p1'>KeazoN<span id='brand-p2'>BOOKS</span></span>
            </div>
            <div className="search">
                <div className="searchbar">
                    <AiOutlineSearch />
                    <input
                        type="text"
                        id="searchBar"
                        placeholder="Search for the book you want and read it now."
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button id='search-btn' onClick={searchBooks}>Search</button>
            </div>
            <div className="navLinks">
                <div className="link">
                  <img src={favourites} alt="" />
                </div>
                <div className="link">
                  <img src={notification} alt="" />
                </div>
                <div className="link">
                  <img src={premium} alt="" />
                </div>
                <div className="link">
                  <img src={user} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
