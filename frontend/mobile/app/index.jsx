import { StyleSheet, Text, View, ImageBackground, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'


const Welcome = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/welcome.jpg')} resizeMode="cover" style={styles.image}>
        <Text style= {{
           color: '#FFF',
           fontFamily: 'Poppins',
           fontSize: 30,
           fontStyle: 'normal',
           fontWeight: '700',
           lineHeight: 39, // Since 130% of 30px is approximately 39px
           letterSpacing: -0.3,
           marginBottom: 40
        }}>Doctor Assistance</Text>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 330,
          height: 56,
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#045883"
        }} onPress={() => console.log('Pressed')}>
          <Text style={{
            color: '#FFF',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            textAlign: 'center',
            // backgroundColor: '#000000c0',
          }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: 330,
          height: 56,
          padding: 10,
          borderColor: '#ffff',
          borderWidth: 1,
          borderRadius: 10,
          marginHorizontal: 90
        }} onPress={() => console.log('Pressed')}>
          <Text style={{
            color: '#FFF',
            fontFamily: 'Poppins',
            fontSize: 14,
            fontStyle: 'normal',
            textAlign: 'center',
            // backgroundColor: '#000000c0',
          }}>Create Account</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Welcome


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    gap: 10
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    // backgroundColor: '#000000c0',
  },
  pressable: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 353,
    height: 56,
    padding: 10,
    borderColor: '#ffff',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#045883"
  }
});