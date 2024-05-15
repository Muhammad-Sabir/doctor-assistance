import { View, Text } from 'react-native';
import React from 'react';
import { createContext, useContext, useState } from 'react';
import {Role} from '../constants/constants';

export const UserContext = createContext();


export const UserContextProvider = ({children})=> {
    
    const [userDetails, setUser] =  useState({
        name: "",
        email: "",
        phone: "",
    })


    const initializeData = async(token) => {
        try {
            const response = await fetch("http://10.0.2.2:8000/api/user/me", {
                method: "GET",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"
                }
            })
            const responseData = await response.json()

            setUser({
                name: responseData['name'],
                email: responseData['email'],
                phone: responseData['phone']
            })

        } catch (err) {
            console.log("Error while initializing data", err)
        }
    }

    const updateUserDetails = async(token, userData) => {
        try {
            const response = await fetch("http://10.0.2.2:8000/api/user/me/", {
                method: "PATCH",
                headers: {
                    "Authorization": `Token ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const responseData = await response.json();
            console.log(responseData);
            setUser({
                name: responseData['name'],
                email: responseData['email'],
                phone: responseData['phone']
            })
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    }
    
    return (
        <UserContext.Provider value={{userDetails, initializeData, updateUserDetails}}>
            {children}
        </UserContext.Provider>
    )
}


export const useUserContext = () => {
    const value = useContext(UserContext)

    if (!value) {
        throw new Error("This component is not under Context Provider")
    }

    return value;
}