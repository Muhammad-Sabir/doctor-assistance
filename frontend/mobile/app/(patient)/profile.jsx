import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { useUserContext } from '../../contexts/UserContext'
import { useAuthContext } from '../../contexts/AuthContext'

const profile = () => {
  const router = useRouter();
  const {userDetails} = useUserContext();
  const {logout} = useAuthContext();

  const data = {
    name: 'Daniyal Khan',
    email: 'daniyalkhan@gmail.com',
    image: require("../../assets/images/doctorpic.jpg"),
    phone: '0300-3832-1192',
  };

  const options = [
    { icon: 'edit', title: 'Edit Profile', screen: 'editprofile' },
    { icon: 'addusergroup', title: 'Registered Patients', screen: 'registeredPatients' },
    { icon: 'setting', title: 'Settings', screen: 'settings' },
    { icon: 'notification', title: 'Notifications', screen: 'notifications' },
    { icon: 'questioncircleo', title: 'FAQ', screen: 'FAQ' },
    { icon: 'profile', title: 'Consultation History', screen: 'consultationHistory' },
    { icon: 'infocirlceo', title: 'About App', screen: 'aboutApp' },
  ];

  const handleOptionPress = (screen) => {
    router.push(`(patient)/${screen}`)
  };

  const handleLogout = () => {
    logout();
  };


  return (
    <ScrollView className="bg-white">

      {/* patient-profile-info */}
      <View className="flex flex-col items-center justify-center h-[33vh] mt-12 mb-3">
        <Text className="font-bold text-xl text-[#045883] mb-4 ">Profile Information</Text>
        <View className="mb-4">
          <Image 
            source={data.image ? data.image : require('../../assets/images/placeholder.webp')}
            className="w-32 h-32 rounded-full" 
          />
        </View>
        <View className="items-center">
          <Text className="text-lg font-bold text-[#045883] mb-1 ">{userDetails['name'] || data.name}</Text>
          <View className="bg-[#e2e3e4] py-2 px-3 rounded-md mb-1">
            <Text className="text-base text-[#045883]">{userDetails['email'] || data.email}</Text>
          </View>
          <Text className="text-base text-gray-500">{userDetails['phone'] ||data.phone}</Text>
        </View>
      </View>

      <View className="border-b border-gray-300 mb-1"></View>

      {/* profile-options */}
      <View className="flex flex-col items-center">
        {options.map((option, index) => (
          <TouchableOpacity key={index} onPress={() => handleOptionPress(option.screen)}>
            <View className="flex flex-row items-center justify-between w-full p-5 mx-2">
              <View className="flex flex-row items-center">
                <AntDesign name={option.icon} size={20} className="mr-2" color="gray" />
                <Text className="text-md ml-2 text-gray-500">{option.title}</Text>
              </View>
              <View>
                <MaterialIcons name="arrow-forward-ios" size={20} className="mr-2" color="gray" />
              </View>
            </View>
          </TouchableOpacity>

        ))}
      </View>

      {/* logout button */}
      <TouchableOpacity onPress={() => handleLogout()}>
      <View className="flex flex-row items-center justify-between w-full p-5 mt-9">
        <View className="flex flex-row items-center">
          <AntDesign name="logout" size={20} className="mr-2" color="#045883" />
          <Text className="text-md ml-2 text-[#045883]">Logout</Text>
        </View>
      </View>
      </TouchableOpacity>
    </ScrollView>

  )
}

export default profile