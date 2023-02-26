import React from 'react';
import { Link } from 'react-router-dom';

const Left = () => {
    return (
        <div className=''>
            <Link className='btn btn-ghost w-full'><p className='text-2xl font-bold'>Name</p></Link>
            <Link className='btn btn-ghost w-full'><p className='text-2xl font-bold'>DashBoard</p></Link>

        </div>
    );
};

export default Left;