import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const gitProvider = new GithubAuthProvider();
export const provider = new GoogleAuthProvider();
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider)
    }
    const signInWithGithub=()=>{
        return signInWithPopup(auth, gitProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
});

        return()=>{
            unsubscribe()
        }
    },[])
    const valueInfo={createUser,login,user,logOut,signInWithGoogle,signInWithGithub}
    return (
        <div>
            <AuthContext.Provider value={valueInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;