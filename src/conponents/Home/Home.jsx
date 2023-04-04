import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import Lottie from "lottie-react";
import education from '../../assets/animation.json';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto px-8 mt-20 grid md:grid-cols-2 items-center'>
            <div className='md:w-10/12'>
                <p className='badge'>On sale</p>
                <h1 className='text-4xl font-bold mt-5'>
                    A reader lives a <br />thousand lives
                    <span className='text-blue-400'> before he dies</span>
                </h1>
                <p className='my-10 font-semibold'>
                    Books are a uniquely portable magic. Books serve to show a man that
                    those original thoughts of his aren't very new after all. The man
                    who does not read good books is no better than the man who can't.
                </p>


                <div className='flex gap-4'>
                    <Link to='books' className='flex gap-2 bg-sky-400 py-2 px-4 rounded text-white font-semibold hover:bg-sky-500 duration-500'>
                        Visit Store
                        <ShoppingCartIcon className='h-6 w-6' />

                    </Link>

                    
                    <Link to='about' className='py-2 px-4 rounded font-bold'>
                        Learn More

                    </Link>
                </div>


            </div>




            <div className='w-5/6 ml-auto'>
                <Lottie animationData={education}></Lottie>

            </div>

        </div>
    );
};

export default Home;