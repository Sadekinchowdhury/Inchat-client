import React, { useContext } from 'react';
import { FaUser, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Left = () => {
    const { userInfo } = useContext(AuthContext)
    return (
        <div className='p-5'



        >
            <Link className='flex items-center hover:bg-gray-400 p-4 rounded-2xl mb-2   w-full'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img title={userInfo?.firstName} src={userInfo?.image} alt='' />
                    </div>



                </label>

                <p className='text-2xl ml-3 font-bold'>{userInfo?.firstName}</p><p className='ml-2 text-2xl font-bold'>{userInfo?.lastName}</p></Link>

            <Link className='flex items-center  hover:bg-gray-400 p-4 rounded-2xl mb-4  w-full'>
                <FaUserFriends className='w-10 h-10'></FaUserFriends> <p className='ml-3  text-2xl font-bold'>Friends</p> </Link>



        </div>
    );
};

export default Left;