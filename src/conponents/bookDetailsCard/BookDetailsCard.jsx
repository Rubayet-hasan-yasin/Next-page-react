import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router-dom';
import Loading from '../Loading/Loading';

const BookDetailsCard = () => {
    const data = useLoaderData();
    const { image, title, authors, publisher, year, rating, desc, url, price} = data

    const [istrue, setIstrue] = useState(false)


    const navigation = useNavigation();
    
    if(navigation.state === 'loading'){
        return <Loading />
    }


    return (
        <div className='max-w-6xl mx-auto h-screen md:flex justify-center items-center gap-20'>

            <img src={image} alt="" className='h-5/6' />


            <div className='w-3/4 ml-auto'>
                <p className='badge'>brand new</p>
                <h1 className='text-4xl font-bold mt-3'>{title}</h1>

                <p className='text-gray-900 font-semibold my-1'>Author: {authors}</p>

                <p className='text-gray-900 font-semibold my-1'>Publisher: {publisher}</p>

                <p className='text-gray-900 font-semibold my-1'>Year: {year}</p>

                <p className='text-gray-900 font-semibold my-1'>Aating: {rating}</p>



                <p className='text-gray-900 font-semibold my-1'>{istrue ? desc : desc.substring(0,100) }.....

                 <button onClick={()=>setIstrue(!istrue)} className='text-blue-500 font-bold'>{istrue ? 'read less' : 'read more'}</button>
                </p>

                <div className='flex gap-4 mt-10'>
                    <Link to='books' className='flex gap-2 bg-sky-400 py-2 px-4 rounded text-white font-semibold hover:bg-sky-500 duration-500'>
                        Buy Now
                        

                    </Link>

                    
                    <p to='about' className='py-2 px-4 rounded font-bold'>
                        {price}

                    </p>
                </div>

            </div>
        </div>
    );
};

export default BookDetailsCard;