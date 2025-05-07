import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.config';


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const updateUser = (updatedData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, updatedData)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])
   
    
    if(loading){
        return (
            <div className="min-h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg text-blue-500"></span>
        </div>
        )
    }


    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        updateUser
    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;