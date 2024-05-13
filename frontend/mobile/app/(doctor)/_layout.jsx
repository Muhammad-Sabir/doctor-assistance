import React from 'react'
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text } from 'react-native';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false, headerShown: false,
      tabBarStyle: {
        height: 65
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Ionicons size={28} name="home" color={focused ? '#045883' : 'gray'} />
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Home</Text>
              </View>
            )
          }
        }}
      />

      <Tabs.Screen
        name="patientsList"
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View className='items-center justify-center'>
                <FontAwesome6 size={28} name="person-cane" color={focused ? '#045883' : 'gray'} />
                <Text className={`text-sm ${focused ? 'text-[#045883]' : 'text-gray-500'}`}>Patients</Text>
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
              <View className='items-center justify-center'>
                <FontAwesome6 size={28} name="notes-medical" color={focused ? '#045883' : 'gray'} />
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
              <View className='items-center justify-center'>
                <FontAwesome6 size={28} name="user-doctor" color={focused ? '#045883' : 'gray'} />
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