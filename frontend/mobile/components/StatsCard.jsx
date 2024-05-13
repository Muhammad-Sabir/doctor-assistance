import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const StatsCard = ({ icon, title, value }) => {
    return (
        <View className="w-[48%] p-4 bg-[#d3e8f7] rounded-lg shadow-md flex-row items-center mb-4">
            <FontAwesome5 name={icon} size={24} color="#0A5C8E" className="mr-2" />
            <View className="ml-1">
                <Text className="text-md font-bold">{title}</Text>
                <Text className="text-lg text-[#045883]">{value}</Text>
            </View>
        </View>
    )
}

export default StatsCard