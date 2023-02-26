import React from 'react';
import Navbar from '../Navbar/Navbar';
import Posted from '../Pages/AllPost/Posted/Posted';
import PostForm from './PostForm/PostForm';
import Posts from './Posts/Posts';

const Home = () => {
    return (
        <div>

            <div>
                <PostForm></PostForm>
                <Posted></Posted>
            </div>
        </div>
    );
};

export default Home;