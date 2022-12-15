import React, { useState } from 'react'
import { auth, google, facebook, github } from './firebase'
import { signInWithPopup, signOut } from 'firebase/auth'
import Header from '../layout/header/header'
import LoginWithPass from './loginWithPass'


import { FaGooglePlusG } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'
import { FiGithub } from 'react-icons/fi'

import AOS from 'aos';
import 'aos/dist/aos.css';


function Login() {

    // const [isLogin, setIsLogin] = useState(false)
    const [user, setUser] = useState(null)



    const login = async (provider) => {
        const result = await signInWithPopup(auth, provider)
        setUser(result.user)
        // if (!result) {
        //     setIsLogin(true)
        // }
        // setIsLogin(true)
        console.log(result)
    }

    const LoginTrue = () => (
        <div className='box-loginTrue' data-aos="zoom-in-up" data-aos-delay="200">
            <h1>Welcome!</h1>
            <img src={user.photoURL} style={{ width: 120 }} />
            <p>Welcome {user.displayName}</p>
            <p>Your account {user.email}</p>

        </div>
    )



    const logout = async () => {
        const result = await signOut(auth)
        setUser(null)
        // setIsLogin(false)
        console.log(result)
    }

    return (
        <>
            <Header />

            <div
                data-aos="fade-up" data-aos-delay="200"
                className="login__main">

                <div
                    data-aos="fade-up" data-aos-delay="200"
                    className='login__with-email'
                >
                    <LoginWithPass />
                </div>

                <div className="login__with-auth" data-aos="fade-up" data-aos-delay="200">

                    {user ? <LoginTrue /> : (<h1>Or Login with...</h1>)}

                    <button
                        className='btn-login-auth'
                        onClick={() => login(google)}>
                        <FaGooglePlusG />
                    </button>
                    <button
                        className='btn-login-auth'
                        onClick={() => login(facebook)}>
                        <ImFacebook />
                    </button>
                    <button
                        className='btn-login-auth'
                        onClick={() => { login(github) }}>
                        <FiGithub />
                    </button>
                    <button
                        className='btn-logOut'
                        disabled={!user || null}
                        onClick={logout}
                    >
                        Logout
                    </button>

                </div>

            </div>
        </>

    );
}

AOS.init({
    duration: 500,
});

export default Login;
