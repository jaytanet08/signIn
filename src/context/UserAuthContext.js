import React, { createContext, useContext, useEffect, useState } from 'react'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider,
    signInWithPopup,
    sendPasswordResetEmail,
    TwitterAuthProvider,
    GithubAuthProvider
} from "firebase/auth"

import { auth } from '../config/firebaseConfig';

const userAuthContext = createContext();
export function UserAuthContextProvider({ children }) {
    const [user, setUser] = useState({});
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function logOut() {
        return signOut(auth)
    }
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };
    function signInWithFacebook() {
        const provider = new FacebookAuthProvider();
        return signInWithPopup(auth, provider);

    };
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }
    function signInWithTwitter() {
        const provider = new TwitterAuthProvider();
        return signInWithPopup(auth, provider);
    }
    function signInWithGitHub() {
        const provider = new GithubAuthProvider();
        return signInWithPopup(auth, provider);
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser)
            setUser(currentuser);
        })
        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <userAuthContext.Provider value={{ user, logIn, signUp, logOut, signInWithGoogle, signInWithFacebook,resetPassword,signInWithTwitter,signInWithGitHub}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext)
}
