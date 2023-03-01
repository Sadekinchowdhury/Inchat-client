import React, { useContext } from 'react';
import { FaBeer, FaFacebookMessenger, FaFlag, FaHome, FaPlay, FaSearch, FaShoppingCart, FaUserFriends } from "react-icons/fa";
import { AiFillNotification } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Navbar = () => {

    const navigate = useNavigate()
    const { user, LogOut, userInfo } = useContext(AuthContext)
    const handlLogout = () => {
        LogOut()
            .then(() => { })
        navigate('/')
            .catch(error => console.log(error))
    }

    return (


        <div className="navbar bg-white shadow-2xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            {
                                user?.uid ? <Link onClick={LogOut}>Logout</Link> : <> </>
                            }
                        </li>
                        <li>
                            <FaUserFriends></FaUserFriends> <span>Friends</span>
                        </li>

                    </ul>
                </div>
                <div className='lg:flex lg:ml-10 items-center'>

                    <div className='lg:flex hidden'>
                        <img src="https://i.ibb.co/4T1skzY/download-6-removebg-preview.png" className='outline border-2 rounded-full'
                            height={40}
                            width={40}
                            layout="fixed" alt="" />
                    </div>
                    <div className='flex ml-2 p-1 rounded-xl items-center'>

                        <input type="text" placeholder="Search Inchat" className="input bg-gray-200 bordered h-6 lg:h-10 lg:w-80 w-20 rounded-full"></input>


                    </div>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu grid grid-cols-4 gap-14 menu-horizontal px-1">
                    <Link to={'/'} title='Home' className='btn border-2  btn-ghost hover:bg-slate-400'><FaHome className='h-7 w-14'></FaHome> </Link>

                    <Link to={'/friend'} title='Friends' className='btn border-2 btn-ghost hover:bg-slate-400 h-7 w-15'><FaUserFriends className='h-7 w-14'></FaUserFriends> </Link>

                    <Link title='Video' className='btn btn-ghost hover:bg-slate-400 h-7 w-15'><FaPlay className='h-7 w-14'></FaPlay> </Link>



                    <Link title='marketplace' className='btn btn-ghost hover:bg-slate-400 h-7 w-15'><FaShoppingCart className='h-7 w-14'></FaShoppingCart> </Link>


                </ul>

            </div>
            <div className="navbar-end">
                <div className=' flex items-center  justify-center mr-10 lg:mr-20'>
                    <AiFillNotification className='w-4 h-4 '></AiFillNotification><p className='mr-1 lg:mr-2'>4</p>

                    <FaFacebookMessenger className=' h-4 w-4'></FaFacebookMessenger><p className='mr-1 lg:mr-2'>5</p>

                    <FaFlag className='h-4 w-4'></FaFlag> <p className='mr-1 lg:mr-2'>1</p>
                </div>
                <div className="dropdown lg:mr-10 dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                        <div className="lg:w-24  lg:flex hidden rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img title={userInfo?.firstName} src={userInfo?.image} alt='' />
                        </div>


                        {/* <div className="w-10 rounded-full">
                            <img src={userInfo?.image} alt='' />
                        </div> */}
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                {/* <img src={userInfo?.image} className='outline-1 border-2' alt="" /> */}

                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>
                            {
                                user?.uid ? <Link onClick={LogOut}>Logout</Link> : <> <Link to={'/login'}>Login</Link></>
                            }

                        </a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;