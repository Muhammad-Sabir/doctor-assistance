import { View, Text } from 'react-native';
import React from 'react';
import { createContext, useContext, useState } from 'react';
import {Role} from '../constants/constants';

export const AuthContext = createContext();


export const AuthProvider = ({children})=> {
    
    const [userAuthentication, setUserAuthentication] =  useState({
        role: Role.PATIENT,
        email: null,
        isAuthenticated: undefined
    })

    // api calling for handling login
    const login = async (email, password) => {
        if (email === 'doctor' && password === 'doctor') {
            setUserAuthentication((prev)=> ({...prev, email: email, isAuthenticated: true, role: Role.DOCTOR}))
        } else if (email === 'patient' && password === 'patient') {
            setUserAuthentication((prev)=> ({...prev, email: email, isAuthenticated: true, role: Role.PATIENT}))
        }
    }

    const register = async(username, email, role) => {
        console.log("register called");
        fetch("http://10.0.2.2:8000/api/user/create/", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "phone": "885678912",
            "email": "88889abc@gmail.com",
            "password": "dasbasjdbaskjd",
            "name": "88889abc example",
            "is_doctor": false
        })
    })
        // setUserAuthentication((prev)=> ({...prev, isAuthenticated: true, role: role, email: email}))
    }
    
    const logout = async() => {
        setUserAuthentication((prev)=> ({...prev, isAuthenticated: false}))
    }

    return (
        <AuthContext.Provider value={{userAuthentication, login, register, logout}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
    const value = useContext(AuthContext)

    if (!value) {
        throw new Error("This component is not under Context Provider")
    }

    return value;
}