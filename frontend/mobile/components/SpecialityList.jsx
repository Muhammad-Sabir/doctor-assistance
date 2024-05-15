import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'

const SpecialityList = () => {

    const specialties = [
        { id: '1', name: 'Orthopedics' },
        { id: '2', name: 'Cardiology' },
        { id: '3', name: 'Dermatology' },
        { id: '4', name: 'Pediatrics' },
        { id: '5', name: 'Neurology' },
        { id: '6', name: 'Ophthalmology' },
        { id: '7', name: 'Pediatrics' },
        { id: '8', name: 'Neurology' },
        { id: '9', name: 'Ophthalmology' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity >
            <View className="m-2 p-3  bg-[#045883] rounded-md">
                <Text className="text-md text-white" >{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View>
            <FlatList
                data={specialties.slice(0, 6)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                className="flex-grow-0"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}
                decelerationRate="fast"
                snapToInterval={Dimensions.get('window').width / 3.5}
                snapToAlignment="center"
            />
        </View>
    )
}

export default SpecialityList