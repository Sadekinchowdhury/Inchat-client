

// export default AuthProvider;
import React, { useState, useEffect, createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext()

const gprovider = new GoogleAuthProvider();


const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    // signup
    const creatUsers = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sigout

    const LogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // google login
    const GoogleLogin = (Provider) => {
        return signInWithPopup(auth, Provider)
    }


    // signin

    const LogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update profile

    const updatePro = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo)
    }

    // statechang


    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('observ')
            setUser(currentUser)
            setLoading(false)
        });
        return () => unSubscribe();


    }, [])

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setUserInfo(data));
    }, [user?.email]);

    const authInfo = {
        updatePro,
        creatUsers,
        LogIn,
        user,
        LogOut,
        loading,
        GoogleLogin,
        userInfo

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;