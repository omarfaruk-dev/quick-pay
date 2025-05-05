import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider


const AuthProvider = ({ children }) => {

    const [balance, setBalance] = useState(10000); // Initial balance (চাইলে database থেকে load করতে পারো)
    const [paidBills, setPaidBills] = useState([]); // Paid bill id list

    //share currentUser info
    const [user, setUser]=useState(null)
    //loading on state change
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //sign in with google
    const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //update user
    const updateUser = (updatedData) => {
        updateProfile(auth.currentUser, updatedData)
    }

    const signOutUser = ()=>{
        setLoading(true)
        return signOut(auth)
    }


    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        setUser,
        googleSignIn,
        updateUser,
        signOutUser,
        balance,
        setBalance,
        paidBills,
        setPaidBills,
    }

    //auth state change, if user login or logout
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false) // stop loading
        })
        return ()=>{
            unSubscribe();
        }
    },[])

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;