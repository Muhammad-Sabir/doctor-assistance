import { MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Image, TouchableOpacity} from 'react-native';

const Slider = () => {
    const images = [
        require('../assets/images/doc-banner-2.jpg'),
        require('../assets/images/doc-banner-1.jpg'),
        require('../assets/images/doc-banner-3.jpg'),
        require('../assets/images/doc-banner-4.jpg')
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <View className="flex-row items-center justify-between mx-4 mb-5">
            <TouchableOpacity onPress={handlePrev} className="p-4">
                <MaterialIcons name="keyboard-double-arrow-left" size={20} color="gray" />
            </TouchableOpacity>

            <View className="flex flex-col items-center mt-3 mb-3">
                <Image source={images[currentIndex]} className="h-[20vh] w-[80vw]" />
            </View>

            <TouchableOpacity onPress={handleNext} className="p-4">
                <MaterialIcons name="keyboard-double-arrow-right" size={20} color="gray" />
            </TouchableOpacity>
        </View>

    );
};

export default Slider;
