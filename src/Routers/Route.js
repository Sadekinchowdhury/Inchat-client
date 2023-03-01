
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import PostForm from '../Home/PostForm/PostForm';

import Main from '../Laout/Main';
import Login from '../Login/Login';
import Friends from '../Pages/Friends/Friends';
import PostEdit from '../Pages/Postedit/PostEdit';
import Videos from '../Pages/Videos/Videos';
import PrivetRoute from '../PrivetRout/PrivetRout';
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
            {
                path: '/',
                element: <PrivetRoute><PostForm></PostForm>  </PrivetRoute>
            },
            {
                path: '/video',
                element: <Videos></Videos>
            },
            {
                path: '/friend',
                element: <Friends></Friends>
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