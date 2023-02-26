
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import PostForm from '../Home/PostForm/PostForm';
import Main from '../Laout/Main';
import Login from '../Login/Login';
import Singup from '../Signup/Singup';

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Singup></Singup>
    }
])


export default Route;