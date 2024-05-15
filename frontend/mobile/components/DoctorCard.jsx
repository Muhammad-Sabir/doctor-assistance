import React from 'react'
import { View, Text, Image } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const DoctorCard = ({ name, image, rating, specialties, location, experience }) => {

    return (
        <View className="flex flex-row bg-white rounded-md p-4 m-2 border border-gray-300 shadow-lg">
            <View className="mr-4">
                <Image source={image} style={{ width: 90, height: 90, borderRadius: 8 }} />
            </View>

            <View className="flex-1" style={{ width: 200}} >
                <View className="flex-1 flex flex-row justify-between">
                    <Text className="text-md font-bold text-[#045883] mt-1">{name}</Text>
                    <View className="flex flex-row items-center">
                        <FontAwesome name="star" size={13} color="#fbbf24" />
                        <Text className="text-md ml-1">{rating}</Text>
                    </View>
                </View>
                <Text className="text-sm text-gray-500 mb-1">{specialties.join(', ')}</Text>
                <Text className="text-sm mb-1">{location}</Text>
                <View className="flex flex-row items-center mb-1">
                    <AntDesign name="checkcircleo" size={13} color="gray" />
                    <Text className="text-sm  text-gray-500 ml-1">{experience}y + of experience</Text>
                </View>
            </View>
        </View>
    )
}

export default DoctorCard