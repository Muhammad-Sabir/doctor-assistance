import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import Button from '../../components/Button';
import { useUserContext } from '../../contexts/UserContext';
import { useAuthContext } from '../../contexts/AuthContext';

const ProfileForm = () => {
    const {userDetails, updateUserDetails } = useUserContext()
    const {userAuthentication} = useAuthContext()
    const [formData, setFormData] = useState({
        name: userDetails['name'],
        email: userDetails['email'],
        password: 'password123',
        phone: userDetails['phone'],
        image: ''
    });

    const handleImageClick = () => {
        console.log('Add image...');
    };

    const handleSubmit = () => {
        console.log('Form submitted', formData);
        const {password, image, ...updatedData} = formData;
        updateUserDetails(userAuthentication['token'], updatedData)
        Alert.alert("Profile", "Profile Updated Succesfully")
    };

    return (
        <ScrollView className='bg-white'>
            <View className="px-4 pt-4 bg-white mt-10">
                <View className="items-center mb-4">
                    <TouchableOpacity onPress={handleImageClick}>
                        <Image
                            source={formData.image ? formData.image : require('../../assets/images/placeholder.webp')}
                            className="h-[20vh] aspect-square rounded-full"
                        />
                    </TouchableOpacity>
                </View>
                <View className="p-2">
                    <Text className="mb-2 text-[#045883]">Name</Text>
                    <TextInput
                        className="border-[#3f3e7a] border rounded-md p-2 mb-2"
                        value={formData.name}
                        onChangeText={text => setFormData({ ...formData, name: text })}
                    />
                </View>

                <View className="p-2">
                    <Text className="mb-2 text-[#045883]">Email</Text>
                    <TextInput
                        className="border-[#3f3e7a] border rounded-md p-2 mb-2"
                        value={formData.email}
                        onChangeText={text => setFormData({ ...formData, email: text })}
                    />
                </View>
                <View className="p-2">
                    <Text className="mb-2 text-[#045883]">Password</Text>
                    <TextInput
                        secureTextEntry
                        className="border-[#3f3e7a] border rounded-md p-2 mb-2"
                        value={formData.password}
                        onChangeText={text => setFormData({ ...formData, password: text })}
                    />
                </View>
                <View className="p-2">
                    <Text className="mb-2 text-[#045883]">Phone</Text>
                    <TextInput
                        className="border-[#3f3e7a] border rounded-md p-2 mb-2"
                        value={formData.phone}
                        onChangeText={text => setFormData({ ...formData, phone: text })}
                    />
                </View>

                <View className="flex items-center">
                    <Button className="bg-[#045883] mt-3 w-[50%]" onPress={handleSubmit}>
                        <Text className="text-white font-bold">Update</Text>
                    </Button>
                </View>
            </View>
        </ScrollView>

    );
};

export default ProfileForm;