import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { FaUserFriends } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';

const Mobiledashboard = () => {
    return (
        <div className=''>
            <div className="navbar-center  lg:hidden ">
                <ul className="menu grid grid-cols-4 gap-10 menu-horizontal px-1">
                    <Link className='btn border-2 btn-ghost hover:bg-slate-400'><FaHome className=''></FaHome> </Link>

                    <Link className='btn btn-ghost hover:bg-slate-400  '><FaUserFriends className=''></FaUserFriends> </Link>

                    <Link className='btn btn-ghost hover:bg-slate-400 '><FaPlay className=''></FaPlay> </Link>



                    <Link className='btn btn-ghost hover:bg-slate-400 '><FaShoppingCart className=''></FaShoppingCart> </Link>


                </ul>

            </div>
        </div>
    );
};

export default Mobiledashboard;