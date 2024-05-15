import React from 'react';
import { FlatList, Dimensions } from 'react-native';
import DoctorCard from './DoctorCard';
import doctors from '../assets/data/doctorsData';

const DoctorList = ({specialty}) => {

    const filteredDoctors = doctors
    .filter((doctor) => doctor.specialties.includes(specialty))
    .sort((a, b) => b.rating - a.rating);

    const renderItem = ({ item }) => (
        <DoctorCard name={item.name} image={item.image} rating={item.rating} specialties={item.specialties} location={item.location} experience={item.experience}/>
    );

    return (
        <FlatList
            data={filteredDoctors.slice(0, 6)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 10 }}
            decelerationRate="fast"
            snapToInterval={Dimensions.get('window').width / 3.5}
            snapToAlignment="center"
        />
    );
};

export default DoctorList;
