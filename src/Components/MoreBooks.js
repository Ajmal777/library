import React, { useContext } from "react";
import BooksContext from '../Context/BooksContext';

const MoreBooks = () => {
    const {booksList , activeBook , setActiveBook} = useContext(BooksContext);
    return (
        <div className="booksList">
            {
                booksList.map(book => 
                    <div className="book" onClick={()=>setActiveBook(book)}>
                        <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
                    </div>
                )
            }
        </div>
    )
}

export default MoreBooks;