import React from 'react';
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
    const { image, isbn13, price, subtitle, title, url } = book
    return (
        <Link to={`/book/${isbn13}`} className='relative transition transform hover:-translate-y-1 duration-500'>

            <img src={image} alt="" className='object-cover' />


            <div className='bg-black bg-opacity-75 text-white absolute inset-10 opacity-0 hover:opacity-100 duration-500 transition-opacity px-4 py-2 rounded flex flex-col'>
                <p>{title}</p>
                <br />
                <p>{subtitle.substring(0,40)}...</p>
                <br />
                <p className='mt-auto'>price: {price}</p>
            </div>
        </Link>
    );
};

export default BooksCard;