import React from 'react'
import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false, headerShown: false,
      tabBarStyle: {
        height: 72
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center py-1'>
                <View className={`bg-${focused ? '[#045883]' : 'transparent'} rounded-xl p-1.5 px-3`}>
                  <Ionicons size={28} name="home" color={focused ? 'white' : 'gray'} />
                </View>
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Home</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="doctors"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center py-1'>
                <View className={`bg-${focused ? '[#045883]' : 'transparent'} rounded-xl p-1.5 px-3`}>
                  <FontAwesome6 size={28} name="user-doctor" color={focused ? 'white' : 'gray'} />
                </View>
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Doctors</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="consultations"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center py-1'>
                <View className={`bg-${focused ? '[#045883]' : 'transparent'} rounded-xl p-1.5 px-3`}>
                  <FontAwesome6 size={28} name="notes-medical" color={focused ? 'white' : 'gray'} />
                </View>
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Consultations</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center py-1'>
                <View className={`bg-${focused ? '[#045883]' : 'transparent'} rounded-xl p-1.5 px-3`}>
                  <FontAwesome6 size={28} name="circle-user" color={focused ? 'white' : 'gray'} />
                </View>
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Profile</Text>
              </View>
            )
          }
        }}
      />
    </Tabs>
  )
}

export default _layout