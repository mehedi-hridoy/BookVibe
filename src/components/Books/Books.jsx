import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books,setBooks] = useState([]);

    useEffect(() => {
        fetch('/booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div id="books" className='my-16'>
            <h2 className="text-4xl font-extrabold text-center font-serif">Books</h2>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;

/**
 * 1. state to store books
 * 2. useEffect
 * 3. fetch to load data
 * 4. set the data to the books state
 */