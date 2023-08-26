import React, { useContext } from "react";
import BooksContext from '../Context/BooksContext';
import '../Styles/bookDetails.css'
const BookDetails = () => {
    const {activeBook} = useContext(BooksContext);
    return (
        <div className="activeBook" id="bookDetails">
            <div className="book-img">
                <img src={activeBook.volumeInfo.imageLinks.thumbnail} alt="" />
            </div>
            <div className="content">
                <h3>{activeBook.volumeInfo.title}</h3>
                <div className="split">
                    <div className="author">{activeBook.volumeInfo.authors.join(', ')}</div>
                    <div className="publish-date">Published On: {activeBook.volumeInfo.publishedDate}</div>
                </div>
                <div className="book-desc">{activeBook.volumeInfo.description}</div>
                <div className="rating">
                    <span className="rating-avg">Avg Rating: {activeBook.volumeInfo.averageRating}</span>
                    <span className="rating-count">Rating Count: {activeBook.volumeInfo.ratingsCount}</span>
                    <span className="publisher">Publisher: {activeBook.volumeInfo.publisher}</span>
                    <span className="lang">Language: {activeBook.volumeInfo.language}</span>
                </div>
                <div className="book-btn">
                    <button onClick={()=> window.location.href = activeBook.volumeInfo.previewLink}>Now Read!</button>
                    <button onClick={()=> window.location.href = activeBook.volumeInfo.infoLink}>More info!</button>
                </div>
            </div>
        </div>
    )
};

export default BookDetails;
