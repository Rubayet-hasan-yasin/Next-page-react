import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();

    console.log(error);
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
            <p className='text-9xl font-bold text-blue-400'>4</p>
            <div className='w-20 h-20 border-8 border-dashed rounded-full animate-spin mt-5 border-blue-400 mx-4'></div>
            <p className='text-9xl font-bold text-blue-400'>4</p>
        </div>
    );
};

export default Error;