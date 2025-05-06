import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged,sendPasswordResetEmail,signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [balance, setBalance] = useState(10000);
    const [paidBills, setPaidBills] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    };

    const resetPassword = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // Load balance from localStorage after user login
    useEffect(() => {
        if (user) {
            const stored = localStorage.getItem(`balance_${user.uid}`);
            if (stored) {
                setBalance(parseFloat(stored));
            } else {
                setBalance(10000); // Default starting balance if not found
            }
        }
    }, [user]);

    // Save balance to localStorage when it changes
    useEffect(() => {
        if (user) {
            localStorage.setItem(`balance_${user.uid}`, balance);
        }
    }, [balance, user]);

    // Firebase auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);

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
        resetPassword,
    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
