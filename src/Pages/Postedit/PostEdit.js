import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';





const PostEdit = ({ post, refetch }) => {
    const { user, loading, userInfo } = useContext(AuthContext)
    console.log(user)
    const imageHostkeyk = `b594fa7696a7b82ee601812a121198fc`
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    let state = {
        curDT: new Date().toLocaleString(),
    }


    const PostButton = data => {

        console.log(data)
        const image = data.img[0]

        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostkeyk}`
        fetch(url, {
            method: 'POST',
            body: formData


        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData)
                if (imgData.success) {

                    console.log(imgData.data.url)

                }

                const postData = {
                    post: data.post,
                    image: imgData.data.url


                }
                fetch(`http://localhost:5000/post/edit/${post?._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                    .then(res => res.json())
                    .then(data => {
                        // if (data.acknowledged) {
                        //     toast('You are posted succecfully')

                        // }
                        if (data.modifiedCount > 0) {
                            refetch()
                            toast.success('Post edited successfully')
                        }
                        console.log(data)


                    })
                console.log(postData)
            })





    }


    return (

        // <section className='lg:p-6 p-3  mb-4  rounded-3xl lg:m-6  shadow-2xl '>

        <div className=''>

            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal w-4/5 py-10 lg:mx-auto m-3 modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">x</label>
                    </div>
                    <div className="avatar   ml-3 mt-2">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">


                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={userInfo?.image} title={userInfo.firstName} alt='' />
                            </div>



                        </label>

                        <p className='ml-3 font-bold'> {userInfo?.firstName}<span className='ml-1'>{userInfo?.lastName}</span></p>



                    </div>


                    <form onSubmit={handleSubmit(PostButton)}>
                        <div className='m-3'>
                            <textarea className='lg:w-full lg:m-2  w-4/5  p-3 outline rounded-2xl' type='text' {...register("post", {

                            })} placeholder='Write you article....' id="" cols="10" rows="5">

                            </textarea>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <input type="file" {...register("img", {

                            })} placeholder='img add' className="input input-bordered mb-2 w-full max-w-xs" />
                        </div>
                        <div>
                            <input className='btn btn-outline hover:bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500' type="submit" />
                        </div>
                    </form>
                </div >
            </div >
        </div >
        // </section>

    );
};

export default PostEdit;


