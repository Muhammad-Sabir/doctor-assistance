import React from 'react'
import { FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'
import { Platform } from 'react-native';

const _layout = () => {
  const router = useRouter();

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

      <Tabs.Screen
        name="editprofile"
        options={{
          headerShown: true,
          headerTitle: 'Edit Profile',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#045883',
            fontSize: 18,
          },
          headerStyle: {
            shadowColor: Platform.OS === 'android' ? 'rgba(0,0,0,0.9)' : undefined,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.push("(patient)/profile")}>
              <Ionicons name="arrow-back" size={24} color="gray" className='ml-4' />
            </TouchableOpacity>
          ),
          tabBarButton: () => null
        }}
      />
    </Tabs>
  )
}

export default _layout