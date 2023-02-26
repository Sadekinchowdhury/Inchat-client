import React, { useState } from 'react';

const GetComment = ({ comments, refetch }) => {

    const { comment, photo, userfirstName, userlastName } = comments
    refetch()
    return (
        <div className="flex  gap-4">
            <div className='py-5'>

                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={photo} alt='' />
                    </div>



                </label>




            </div>

            <div className='mt-3'>
                <p className='text-xl  lg:ml-3 ml-2 text-black font-semibold'> {userfirstName} <span className='ml-1'>{userlastName}</span></p>

                {/* <p className='bg-blue-500 text-white shadow-2xl p-3 rounded-2xl'>{comments?.comment}</p> */}

                <div className="chat chat-end">
                    <div className="chat-bubble"> {comments?.comment}</div>
                </div>
            </div>

        </div>
    );
};

export default GetComment;