import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const PostForm = () => {
    const { user, loading } = useContext(AuthContext)
    console.log(user)
    const imageHostkeyk = `b594fa7696a7b82ee601812a121198fc`
    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()

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
                    image: imgData.data.url,
                    username: user?.displayName,
                    email: user?.email

                }
                fetch('http://localhost:5000/post', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(postData)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            navigate('/')

                        }
                        console.log(data)


                    })
                console.log(postData)
            })





    }


    return (
        <section className='p-7 w-full'>
            <div>
                <div className=''>
                    <div className="avatar offline">
                        <div className="w-10 rounded-full">
                            <img alt='' src="https://placeimg.com/192/192/people" />

                        </div>
                        <span className='ml-3 font-bold'> {user?.displayName}</span>
                    </div>
                </div>


                <form onSubmit={handleSubmit(PostButton)}>
                    <div>
                        <textarea className='w-full p-3 outline rounded-2xl' type='text' {...register("post", {

                        })} placeholder='Write you article....' id="" cols="10" rows="5">

                        </textarea>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <input type="file" {...register("img", {

                        })} placeholder='img add' className="input input-bordered mb-2 w-full max-w-xs" />
                    </div>
                    <div>
                        <input className='btn btn-accent' type="submit" />
                    </div>
                </form>


            </div>
            {/* <div>
                {
                    post &&
                    post?.map(poster =>
                        <Homepost
                            poster={poster}
                            id={poster._id}
                        >

                        </Homepost>


                    )

                }
            </div> */}
        </section>
    );
};

export default PostForm;