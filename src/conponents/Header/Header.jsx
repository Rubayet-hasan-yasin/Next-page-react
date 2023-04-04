import React, { useState } from 'react';
import { BoltIcon, Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [istrue, setIstrue] = useState(false)
    return (
        <div className='sm:flex justify-between items-center max-w-7xl m-auto px-9'>
            <Link to='/' className='flex'>
                <BoltIcon className="h-8 w-8 text-blue-500" />
                <h1 className='ml-2 text-2xl font-bold tracking-wide text-gray-800'>Next Page</h1>
            </Link>

            <div className='sm:hidden absolute right-6 top-2'>
                <button onClick={()=>setIstrue(!istrue)}>
                {istrue ? <XMarkIcon title='Close Menu' className='h-6 w-6' /> : <Bars4Icon title='Open menu' className='h-6 w-6' />}
                </button>
            </div>

            <ul className={`${istrue && 'top-1'} sm:flex duration-1000 relative -top-52 sm:top-0 pl-10 mt-6 shadow-2xl sm:space-x-8 text-xl font-bold`}>
                <li>
                    <NavLink
                        to='/'
                        title='Home link'
                        className={({ isActive }) => isActive ? 'text-blue-800' : ''}
                    >
                        Home

                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='books'
                        title='Books link'
                        className={({ isActive }) => isActive ? 'text-blue-800' : ''}
                    >
                        Books

                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to='about'
                        title='About'
                        className={({ isActive }) => isActive ? 'text-blue-800' : ''}
                    >
                        About

                    </NavLink>
                </li>
            </ul>

        </div>
    );
};

export default Header;