import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'

const CustomKeyboardView = ({children}) => {
	return (
		<KeyboardAvoidingView
			behavior='height'
			className="flex-1"
		>
			<ScrollView 
				className="flex-1"
				bounces={false}
				showsVerticalScrollIndicator={false}
			>
				{children}
			</ScrollView>
		</KeyboardAvoidingView>
	)
}

export default CustomKeyboardView