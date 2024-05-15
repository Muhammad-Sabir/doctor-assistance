import { View, Text } from 'react-native';
import React from 'react';
import { createContext, useContext, useState } from 'react';
import {Role} from '../constants/constants';

export const AuthContext = createContext();


export const AuthProvider = ({children})=> {
    
    const [userAuthentication, setUserAuthentication] =  useState({
        name: "",
        role: Role.PATIENT,
        isAuthenticated: undefined,
        token: null
    })

    // api calling for handling login
    const login = async (phone, password, role, callback) => {
        try {
            const response = await fetch("http://10.0.2.2:8000/api/user/token/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    password,
                })
            })
            
            const responseData = await response.json()    
            console.log(responseData)
            if (responseData.hasOwnProperty("token")) {
                const userDetails = await fetch("http://10.0.2.2:8000/api/user/me", {
                    method: "GET",
                    headers: {
                        "Authorization": `Token ${responseData['token']}`,
                        "Content-Type": "application/json"
                    }
                })
                const user = await userDetails.json()
                const isDoctor = user["is_doctor"]
                
                const userResponse = role === Role.DOCTOR;
                if (userResponse === isDoctor) {
                    setUserAuthentication((prev)=> ({...prev, isAuthenticated: true, role: role, name: user['name'], token: responseData['token']}))
                } else {
                    callback(false, null, "please select switch the current tab user")
                }

                callback(true, null, "")
            }  else {
                callback(false, null, "You are not registered either check your phoneNo or password.")
            }
        } catch(err) {
            console.log( "Error faced at register:", err)
            callback(false, err, "An error occurred while signing. Please try again later.")
        }
    }
    const register = async(name, email, phone, password, role, callback) => {
        console.log("register called");
        try {
            const response = await fetch("http://10.0.2.2:8000/api/user/create/", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone,
                    email,
                    password,
                    name,
                    "is_doctor": role === Role.DOCTOR
                })
            })
            const responseData = await response.json()
            console.log(responseData)
            if (Object.keys(responseData).length > 2) {
                setUserAuthentication((prev)=> ({...prev, isAuthenticated: true, role: role, name: name}))
                callback(true, null)
            } else {
                callback(false, null)
            }
        } catch(err) {
            console.log("Error faced at register:", err)
            callback(false, err)
        }
    }
    
    const logout = async() => {
        setUserAuthentication((prev)=> ({...prev, isAuthenticated: false, token: null}))
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