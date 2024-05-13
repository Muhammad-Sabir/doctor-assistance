import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import StatsCard from '../../components/StatsCard';
import SearchBar from '../../components/SearchBar';
import statsData from '../../assets/data/statsData.js';
import LatestConsultationCard from '../../components/latestConsultationsCard.jsx';
import consultationData from '../../assets/data/consultationData.js';

const index = () => {
  return (
    <ScrollView>
      
      {/* doctor's overview */}
      <View className="mt-16 flex-row justify-between items-center p-4">
        <View className="flex-row items-center">
          <Image source={require("../../assets/images/doctorpic.jpg")} className="w-20 h-20 rounded-full" />
          <View className="ml-4">
            <Text className="text-black text-sm">Welcome Dr</Text>
            <Text className="text-lg font-bold text-[#045883]">Dr. Saad Hassan</Text>
          </View>
        </View>
        <Ionicons size={28} name="notifications-outline" color='black' />
      </View>

      {/* searchbar for searching patients*/}
      <SearchBar placeholder={"Search patients by name..."} />

      {/* daily overview section */}
      <View className="p-4">
        <Text className="text-lg font-bold mb-4">Daily Overview</Text>
        <View className="flex flex-row flex-wrap justify-between">
          {statsData.map((data, index) => (
            <StatsCard key={index} icon={data.icon} title={data.title} value={data.value} />
          ))}
        </View>
      </View>

      {/* latest consultation section */}
      <View className="px-4 mb-5">
        <Text className="text-lg font-bold mb-4">Latest Consultations</Text>
        {consultationData.map((data, index) => (
            <LatestConsultationCard key={index}  patientName={data.patientName} timings = {data.timings} fee= {data.fee} date= {data.date} location= {data.location}/>
          ))}
      </View>

    </ScrollView>
  )
}

export default index