import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider/AuthProvider';



const GoogleLogin = () => {
    const { GoogleLogin } = useContext(AuthContext)

    const gprovider = new GoogleAuthProvider()

    const handGoogle = event => {
        event.preventDefault()
        GoogleLogin(gprovider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log('error', error))
    }
    return (
        <div className='items-center justify-center text-center'>
            <button onClick={handGoogle} className='bg-white p-4 rounded-full'><FaGoogle className='w-10 h-10'></FaGoogle> </button>

        </div>
    );
};

export default GoogleLogin;