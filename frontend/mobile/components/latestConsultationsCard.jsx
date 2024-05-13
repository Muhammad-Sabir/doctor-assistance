import React from 'react'
import { View, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

const LatestConsultationCard = ({patientName, timings, fee, date, location}) => {
    return (
        <View className="p-4 bg-white rounded-lg shadow-md my-2">
            <View className="flex flex-row justify-between items-center mb-2">
                <Text className="text-md font-bold text-[#045883]">Patient Name: {patientName}</Text>
                <MaterialIcons name="arrow-forward-ios" size={20} color="gray" />
            </View>

            <View className="border-b border-gray-300 mb-4"></View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Timings:</Text>
                <Text className="text-sm">{timings}</Text>
            </View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Fee:</Text>
                <Text className="text-sm">{fee}</Text>
            </View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Date:</Text>
                <Text className="text-sm">{date}</Text>
            </View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Location:</Text>
                <Text className="text-sm">{location}</Text>
            </View>

        </View>
    )
}

export default LatestConsultationCard