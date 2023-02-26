import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Home from '../Home/Home';
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Mobiledashboard from '../Pages/Mobildasboard/Mobiledashboard';
import Left from '../SidedashBoard/Left';
import Right from '../SidedashBoard/Right';

const Main = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            {
                user?.uid ?
                    <div className=''>
                        <Navbar></Navbar>


                        <div class="flex">
                            <div class="lg:w-2/4  bg-sky-400 sticky  sm:flex hidden shadow-2xl">
                                <Left></Left>
                            </div>
                            <div class="w-full">

                                <Mobiledashboard></Mobiledashboard>
                                <Outlet></Outlet>
                            </div>
                            <div class="bg-indigo-400 sticky sm:flex hidden shadow-2xl lg:w-2/4">
                                <Right></Right>
                            </div>
                        </div>

                    </div> :
                    <>
                        <Login></Login>
                    </>
            }
        </div>
    );
};

export default Main;