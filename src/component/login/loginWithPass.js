import { useRef, useState } from "react";

import { signup, loginE, logoutE, useAuth } from "./firebase";

export default function LoginWithPass() {

    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()
    console.log(currentUser)

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSignup() {
        setLoading(true);
        await signup(emailRef.current.value, passwordRef.current.value)
        setLoading(false);
    }

    async function handleLogin() {
        setLoading(true);
        try {
            await loginE(emailRef.current.value, passwordRef.current.value)
        } catch {
            alert("error!")
        }
        setLoading(false);
    }

    async function handleLogout() {
        setLoading(true);
        try {
            await logoutE()
        } catch {
            alert('Error!')
        }
        setLoading(false)
    }

    return (
        <div className="handle__login-container">

            <div className="handle__login-title-box">
                {currentUser ? (<h1>Congratulation !</h1>) : (<h1>Create Account Here...</h1>)}


                {!currentUser || (<h2>Hello ^^! {currentUser?.displayName}</h2>)}
                {!currentUser || (<h2>Registered Email as: {currentUser?.email}</h2>)}

            </div>

            <div className="handle__login-input-box">
                <input
                    className="handle__login-input"
                    ref={emailRef}
                    placeholder="email" />

                <input
                    type="password"
                    className="handle__login-input"
                    ref={passwordRef}
                    placeholder="password" />
            </div>


            <div className="handle__login-button-box">
                <button
                    className="handle__login-button"
                    disabled={loading || currentUser}
                    onClick={handleSignup}
                >
                    Sign Up
                </button>

                <button
                    className="handle__login-button"
                    disabled={loading || currentUser}
                    onClick={handleLogin}
                >
                    log In
                </button>

                <button
                    className="handle__login-button"
                    disabled={loading || !currentUser}
                    onClick={handleLogout}
                >
                    log Out
                </button>
            </div>

        </div >
    )
}