import { Slot, Stack, useRouter, useSegments } from "expo-router";

import "../global.css"
import { AuthProvider, useAuthContext } from "../contexts/AuthContext";
import { useEffect } from "react";
import { Role } from "../constants/constants";

const MainLayout = () => {
    const segments = useSegments()
    const router = useRouter()
    const {userAuthentication} = useAuthContext();
    
    useEffect(()=>{
        console.log("segements:", segments, userAuthentication.isAuthenticated)
        currentTab = segments[0] === '(doctor)' || segments[0] === '(patient)'  
        if (!currentTab && userAuthentication.isAuthenticated) {
            router.dismissAll()
            if (userAuthentication.role === Role.PATIENT) {
                router.replace('(patient)')
            } else {
                router.replace('(doctor)')
            }
        } else if (currentTab && !userAuthentication.isAuthenticated) {
            router.navigate('signIn')
        }
    }, [userAuthentication])

    return (
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="signIn" options={{headerShown: false}}/>
            <Stack.Screen name="signUp" options={{headerShown: false}}/>
            <Stack.Screen name="(doctor)" options={{headerShown: false}}/>
            <Stack.Screen name="(patient)" options={{headerShown: false}}/>
        </Stack>
    )
}


const RootLayout = () => {
    return (
        <AuthProvider>
            <MainLayout/>
        </AuthProvider>
    )
}

export default RootLayout