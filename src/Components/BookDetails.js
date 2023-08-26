import React, { useContext } from "react";
import BooksContext from '../Context/BooksContext';

const BookDetails = () => {
    const {activeBook} = useContext(BooksContext);
    return (
        <div className="activeBook">
            <h3>{activeBook.volumeInfo.title}</h3>
            <div className="author">{activeBook.volumeInfo.authors.join(', ')}</div>
            <div className="publish-date">Published On: {activeBook.volumeInfo.publishedDate}</div>
            <div className="book-desc">{activeBook.volumeInfo.description}</div>
            <div className="rating">
                <span className="rating-avg">{activeBook.volumeInfo.averageRating}</span>
                <span className="rating-count">{activeBook.volumeInfo.ratingsCount}</span>
                <span className="publisher">{activeBook.volumeInfo.publisher}</span>
                <span className="lang">{activeBook.volumeInfo.language}</span>
            </div>
            <div className="book-btn">
                <button onClick={()=> window.location.href = activeBook.volumeInfo.previewLink}>Now Read!</button>
                <button onClick={()=> window.location.href = activeBook.volumeInfo.infoLink}>More info!</button>
            </div>
        </div>
    )
};

export default BookDetails;
