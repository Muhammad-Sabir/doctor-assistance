import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const ConsultationCard = ({ patientName, timings, date}) => {
    return (
        <View className="p-4 bg-white rounded-lg shadow-md my-2">
            <View className="flex flex-row justify-between items-center mb-2">
                <View>
                    <Text className="text-md font-bold text-[#045883] mb-1">Appointment with {patientName}</Text>
                    <View className="flex flex-row items-center">
                        <MaterialCommunityIcons name="clock-alert-outline" size={20} color="gray" />
                        <Text className="text-sm font-bold text-gray-500 ml-1">Pending</Text>
                    </View>
                </View>
                <MaterialIcons name="arrow-forward-ios" size={18} color="gray" />
            </View>


            <View className="border-b border-gray-300 mb-4"></View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Time Slot:</Text>
                <Text className="text-sm text-gray-500">{timings}</Text>
            </View>

            <View className="flex flex-row justify-between mb-2">
                <Text className="text-sm font-bold">Date:</Text>
                <Text className="text-sm text-gray-500">{date}</Text>
            </View>

            <View className="flex flex-row mt-1">
                <TouchableOpacity>
                    <Text className="text-md text-[#045883] font-bold">Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="text-md text-[#045883] font-bold ml-10">Reschedule</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ConsultationCard