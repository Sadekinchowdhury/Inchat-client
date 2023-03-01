import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

import RecentPosted from '../RecentPosted/RecentPosted';
import { useQuery } from 'react-query';


const Posted = () => {
    const { userInfo } = useContext(AuthContext)

    // const [post, setPost] = useState([])
    // useEffect(() => {
    //     fetch('')
    //         .then(res => res.json())
    //         .then(data => {

    //             setPost(data)
    //         })

    // }, [post])
    // console.log(post)
    const { data: post = [], refetch } = useQuery({
        queryKey: ['post'],

        queryFn: async () => {
            const res = await fetch('https://inchat-new.vercel.app/allpost', {
                headers: {

                    'content-type': 'application/json'
                }
            })
            const data = await res.json();
            refetch()

            return data;

        }


    })





    return (

        <section>

            <div className=''>

                {post &&
                    post?.map(posts => <RecentPosted
                        post={posts}
                        key={posts._id}
                        refetch={refetch}

                    ></RecentPosted>)
                }
            </div>



        </section>
    );
};

export default Posted;