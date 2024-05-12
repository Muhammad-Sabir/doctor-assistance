import { Slot, Stack } from "expo-router";

import "../global.css"

const MainLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="signIn" options={{headerShown: false}}/>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="signUp" />
        </Stack>
    )
}


export default MainLayout