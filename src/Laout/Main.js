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
                        <div className=''>
                            <Navbar></Navbar>
                        </div>


                        <div class="flex">
                            <div class="lg:w-2/5 card bg-slate-300 sticky  sm:flex hidden shadow-2xl">
                                <Left></Left>
                            </div>
                            <div class="w-full">

                                <Mobiledashboard></Mobiledashboard>
                                <Outlet></Outlet>
                            </div>
                            <div class="sticky sm:flex hidden bg--300 shadow-2xl card lg:w-2/5">
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