import React , {useState} from "react";
import BooksContext from "./BooksContext";

const BooksProvider = (props) =>{
    const [booksList, setBooksList] = useState([]);
    const [activeBook, setActiveBook] = useState(false);
    const [error, setError] = useState('');
    return (
        <BooksContext.Provider value={{ booksList, setBooksList , activeBook , setActiveBook , error, setError}}>
            {props.children} 
        </BooksContext.Provider>
    )
}

export default BooksProvider;