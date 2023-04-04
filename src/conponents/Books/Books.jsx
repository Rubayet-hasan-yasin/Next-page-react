import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BooksCard from '../BooksCard/BooksCard';

const Books = () => {
    const {books} = useLoaderData()
    
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-7xl mx-auto justify-center gap-6'>
            {
                books.map(book=> <BooksCard key={book.isbn13} book={book} />)
            
            }
        </div>
    );
};

export default Books;