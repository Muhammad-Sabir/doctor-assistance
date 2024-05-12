import { Text, View, ImageBackground, Pressable } from 'react-native'
import Button from "../components/Button"
import React from 'react'
import { useRouter } from 'expo-router'

const Welcome = () => {
  const router = useRouter();
  return (
    <View className="flex-1">
      <ImageBackground source={require('../assets/images/welcome.jpg')} resizeMode="cover" className="justify-end flex-1 items-center gap-3 p-5">
        <Text className="text-white text-2xl font-bold mb-24">Doctor Assistance</Text>
        <Button className="bg-[#045883]" onPress={() => router.push("signIn")}>
          <Text className="color-white text-base">Sign In</Text>
        </Button>
        <Button className="border border-white" onPress={() => router.push("signUp")}>
          <Text className="color-white text-base">Create Account</Text>
        </Button>
      </ImageBackground>
    </View>
  )
}

export default Welcome

