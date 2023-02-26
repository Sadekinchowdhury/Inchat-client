import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AuthContext } from '../AuthProvider/AuthProvider';

import GoogleLogin from '../GoogleLogin/GoogleLogin';
// import { toast } from 'react-hot-toast'

// import UseToken from '../../Ussetoken/UseToken';

const SignUp = () => {

    const navigat = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const [signuperror, setsignUperror] = useState('')

    const { creatUsers, updatePro, } = useContext(AuthContext)


    // const navigate = useNavigate()
    // if (token) {
    //     console.log(token)
    //     navigate('/')
    // }

    const handlsignup = data => {
        console.log(data)

        // creatt user
        creatUsers(data.email, data.password, data.firstname, data.lastname)
            .then(result => {
                const user = result.user
                console.log(user)
                toast.success('Welcome to the Inchat')
                navigat('/')

                const userinfo = {
                    displayName: data.name
                }

                // update user
                updatePro(userinfo)
                    .then(() => { })

                //  save user
                saveUser(data.email, data.name)

                    .catch(error => console.log(error))
                console.log(user)
            })
            .catch(errors => {

                setsignUperror(errors.message)
            })



        //  saveUser

        const saveUser = (email, name) => {
            const users = { name, email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(users)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)


                })
        }
    }


    // get token



    return (
        <div className='grid place-items-center lg:h-screen'>
            <div className='rounded-3xl'>
                <h1 className='text-6xl mb-10 text-green-700 text-center font-bold'>Signup</h1>
                <form onSubmit={handleSubmit(handlsignup)}>

                    <div className='lg:flex gap-6'>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text text-xl font-semibold mt-2">FirstName</span></label>
                            <input type="text" name='firstname' {...register('name', {
                                required: 'name is requerd'
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>

                                {errors.name.message}
                            </p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-semibold mt-2">LastName</span></label>
                            <input type="text" name='lastname' {...register('name', {
                                required: 'name is requerd'
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.name && <p className='text-red-600'>

                                {errors.name.message}
                            </p>}
                        </div>
                    </div>
                    <div className='lg:flex gap-6'>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text   text-xl font-semibold mt-2">Email</span></label>
                            <input type="text" {...register("email", {
                                required: 'email is required'
                            })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-semibold mt-2">password</span></label>
                            <input type="text" {...register("password", {
                                required: 'pass is required',
                                minLength: { value: 6, message: 'password must be 6 carrecters' },
                                pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'password should be  an uppercase and nmbr' }
                            })}
                                className="input input-bordered mb-6 w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>

                    </div>

                    <p></p>
                    <input className='btn border-t-cyan-500 bg-sky-500 w-full' type="submit" />
                </form>
                <div className='mt-2'>
                    <p>Have you account please <Link to={'/login'}> <span className='text-red-500  font-semibold'>Login</span> </Link> </p>
                </div>

                <div>
                    {signuperror && <p className='text-red-600'>{signuperror}</p>}
                </div>

                {/* <p>new to create account <Link className='text-green-600' to='/signup'>create account</Link> </p> */}
                <div className="divider">OR</div>
                <GoogleLogin></GoogleLogin>
            </div>
        </div>
    );
};

export default SignUp;