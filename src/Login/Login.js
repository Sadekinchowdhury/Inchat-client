import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import { toast } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {


    const { register, formState: { errors }, handleSubmit } = useForm()
    // const [loginerror, setLoginerror] = useState('')

    const { userInfo } = useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()


    const from = location.state?.from?.pathname || '/'
    const auth = getAuth();

    const handlogin = data => {

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user?.uid) {
                    toast(`Welcome ${userInfo?.firstName}`)
                    navigate('/')
                }
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

        // // setLoginerror('')
        // LogIn(data.email, data.password)
        //     .then(result => {
        //         const user = result.user
        //         console.log(user)
        //         toast.success('successfully login')
        //         navigate('/home')
        //         // navigate(from, { replace: true })

        //     })
        //     .catch(error => {
        //         console.log(error)

        //     })
    }


    return (
        <div className='m-3 bg-black'>
            <div className='grid place-items-center  lg:h-screen'>
                <div className='bg-pink-900 p-10 shadow-2xl rounded-3xl'>
                    <h1 className='text-4xl text-white font-bold text-center '>Login</h1>
                    <form onSubmit={handleSubmit(handlogin)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">

                                <span className="label-text text-xl font-bold text-white">Email</span></label>

                            <input type="text" {...register("email", {
                                required: 'email is required'
                            })} className="input input-bordered w-full max-w-xs" />


                            {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text text-xl font-bold text-white">Password</span></label>
                            <input type="password" {...register("password", {
                                required: 'password is required',
                                minLength: { value: 6, message: 'at least 6 carecter' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label">
                                <span className="label-text text-white">forgot password</span></label>
                        </div>


                        <p></p>
                        <input className='btn btn-accent w-full' type="submit" />
                    </form>

                    <p className='text-white'>new to create account <Link className='text-green-600' to='/signup'>Create account</Link> </p>
                    <div className="divider text-white">OR</div>
                    <GoogleLogin></GoogleLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;