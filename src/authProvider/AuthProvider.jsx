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
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
         setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut=()=>{
         setLoading(true)
        return signOut(auth)
    }
    const signInWithGoogle=()=>{
         setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signInWithGithub=()=>{
         setLoading(true)
        return signInWithPopup(auth, gitProvider)
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser)
      setLoading(false)
});

        return()=>{
            unsubscribe()
        }
    },[])
    const valueInfo={createUser,login,user,logOut,signInWithGoogle,signInWithGithub,loading}
    return (
        <div>
            <AuthContext.Provider value={valueInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;