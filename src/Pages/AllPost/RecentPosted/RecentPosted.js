import React, { useContext, useEffect, useState } from 'react';
import { BiLike, BiComment, BiMessage } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Datetime from 'react-datetime';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Controller, get } from 'react-hook-form';
import { useQuery } from 'react-query';
import GetComment from '../Getcomment/GetComment';
import { toast } from 'react-hot-toast';
import Comment from '../Getcomment/Comment';
import Posted from './../Posted/Posted';

const CommunityPosteds = ({ post, refetch }) => {

    const { _id, liking } = post
    const { user, userInfo } = useContext(AuthContext)



    // const { data: getComment = [] } = useQuery({
    //     queryKey: ['post/comment', post?._id],
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/post/comment/${post?._id}`);
    //         const data = await res.json()
    //         refetch()
    //         return data;
    //     }

    // })
    const [like, setLike] = useState(liking + 1 || 1)

    const addlike = () => {
        setLike(like + 1)
        const liked = {
            like,
            userName: userInfo?.name
        }


        fetch(`http://localhost:5000/post/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(liked)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()

                }

            })


    }

    const Addcomment = event => {
        event.preventDefault()
        const form = event.target;
        const comment = form.comment.value
        const commentsData = {
            comment: comment,
            userfirstName: userInfo?.firstName,
            userlastName: userInfo?.lastName,
            commentId: post._id,
            photo: userInfo?.image

        }

        fetch(`http://localhost:5000/post/comment/${_id}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentsData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {

                }


            })



    }

    const DeletePost = () => {
        const response = window.confirm("Do you want to delete?");


        fetch(`http://localhost:5000/post/${_id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 1) {
                    toast.success('Deleted successfully')
                }


            }

            )

    }



    // refetch()

    // if (!commentget || loading) return "Loading..."

    return (

        <div className='bg-white lg:m-6 rounded-3xl shadow-2xl'>
            <div className='justify-between flex m-2 p-3'>
                <div className="avatar   ml-3 mt-2">

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={post?.userimage} title={post.username} alt='' />
                        </div>



                    </label>

                    <p className='ml-3 font-bold'> {post?.firstName}<span className='ml-1'>{post?.lastName}</span> <p className='text-sm'>{post.date}</p></p>



                </div>
                <div>
                    <button onClick={DeletePost} className="btn btn-square btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </div>
            </div>



            <div className="mb-5 m-1 card mx-auto shadow-2xl">

                <div className='p-3'>
                    {post.post}
                </div>

                <figure><img className='w-full bg-slate-300' src={post?.image} alt="" /></figure>
                <div className='p-5'>
                    <div>
                        <span className='flex items-center'>

                            <BiLike></BiLike>{liking}</span>
                    </div>
                    <hr className='' />

                    <div className='lg:ml-10'>
                        <div className='grid grid-cols-3'>
                            <div>
                                <Link onClick={addlike} className='btn btn-ghost'><BiLike className='w-10 h-10'></BiLike>Like</Link>
                            </div>
                            <div>
                                <Link to={'/'} className='btn btn-ghost '><BiComment className='w-10 h-10'></BiComment> Comment</Link>
                            </div>
                            <div>
                                <Link className='btn btn-ghost '><BiMessage className='w-10 h-10'></BiMessage>Message</Link>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='flex'>
                        <div className="avatar shadow-xl items-center justify-center text-center offline">

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img title={userInfo?.firstName} src={userInfo?.image} alt='' />
                                </div>



                            </label>
                        </div>
                        <form onSubmit={Addcomment} className='mt-5'>
                            <label for="chat" class="sr-only">Your message</label>
                            <div class="flex items-center py-2 mx-auto rounded-lg bg-gray-50 dark:bg-gray-700">


                                <textarea id="chat" name='comment' rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
                                <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                                    <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                                    <span class="sr-only">Send message</span>
                                </button>
                            </div>
                        </form>
                    </div>

                    <div>
                        <Comment post={post}></Comment>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default CommunityPosteds;