import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
    getAuth, GoogleAuthProvider, FacebookAuthProvider, GithubAuthProvider
}
    from 'firebase/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "yummei-shop.firebaseapp.com",
    projectId: "yummei-shop",
    storageBucket: "yummei-shop.appspot.com",
    messagingSenderId: "687427858988",
    appId: "1:687427858988:web:ce44bdb90f4b52234cd789",
    measurementId: "G-KDDP3MR139"
};

initializeApp(firebaseConfig);
export const auth = getAuth()


export const google = new GoogleAuthProvider()
export const facebook = new FacebookAuthProvider()
export const github = new GithubAuthProvider()



export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}

export function loginE(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}

export function logoutE() {
    return signOut(auth)
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
        return unsub;
    }, [])
    return currentUser;
}

