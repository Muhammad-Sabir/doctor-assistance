import React from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Alert} from 'react-native';
import Button from "../components/Button"
import { Link} from 'expo-router';
import GoogleLogo from '../assets/images/SVG/GoogleLogo';
import { FontAwesome } from '@expo/vector-icons';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';


const SignIn = () => {
	const {login} = useAuthContext()
	const [activeTab, setActiveTab] = useState('Patient');
	const [user, setUser] = useState({
		phone: "",
		password: ""
	})
	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	const handleLoginIn = () => {
		if (user.phone === ""  || user.password === "") {
			Alert.alert("Login", "Please fill all the fields")
			return 
		}

		// login("patient", "patient")
		login(user.phone, user.password, activeTab, (success, error, message)=> {
			if (error) {
				console.error("Login System Error:", error);
				Alert.alert("Login Failed", message);
			} else if (!success) {
				Alert.alert("Login Failed", message);
			}
		})
	}

	return (
		<CustomKeyboardView>
			<View className="flex-1 px-5">
				<View className="items-center">
					<Image
						source={require("../assets/images/image.png")}
						resizeMode='contain'
						className="h-[33vh] aspect-square"
					/>
				</View>

				<View className=" gap-3">
					<Text className="text-[1.6rem] font-semibold tracking-tighter">Login</Text>
					
					
					<View className="gap-3">
						<View className="w-full bg-[#dadbdc] rounded-xl p-1 flex-row items-center justify-between">
							<Button className={`w-[42vw] rounded-xl ${activeTab === 'Patient'? "bg-[#045883]": ""}`} onPress={()=>handleTabChange("Patient")}>
								<Text className={`font-bold ${activeTab === 'Patient'? "text-white": "text-[#045883]"}`}>Patient</Text>
							</Button>
							<Button className={`w-[42vw] rounded-xl ${activeTab === 'Doctor'? "bg-[#045883]": ""}`} onPress={()=>handleTabChange('Doctor')}>
								<Text className={`font-bold ${activeTab === 'Doctor'? "text-white": "text-[#045883]"}`}>Doctor</Text>
							</Button>
						</View>
						<View className="gap-2">
							<Text className="text-black text-sm">Phone No</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your phoneNo"
								value={user.phone}
								onChangeText={value => setUser(prev => ({...prev, phone: value}))}
								inputMode='tel'
							/>
						</View>

						<View className="gap-2">
							<Text className="text-black text-sm">Password</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your password"
								secureTextEntry={true}
								value={user.password}
								onChangeText={value => setUser(prev => ({...prev, password: value}))}
							/>
						</View>
						<Link className="text-xs text-right text-gray-500" href='forgetPassword'>Forget Password?</Link>
					</View>
					
					<Button
						className="bg-[#045883] w-full"
						onPress={handleLoginIn}
					>
						<Text className="text-white font-bold">Login</Text>
					</Button>
					
				</View>
				
				<View className="gap-0.5">
					<View className="flex-row items-center justify-center my-5">
							<View className="flex-1 h-px bg-gray-500"></View>
							<Text className="px-3 text-xs text-gray-500 font-semibold">OR</Text>
							<View className="flex-1 h-px bg-gray-500"></View>
					</View>
					<View className="flex-row justify-between items-center">
						<Button className="w-[40vw] border border-gray-300">
							<GoogleLogo/>
						</Button>
						<Button className="w-[40vw] border border-gray-300">
							<FontAwesome name="facebook" size={24} color="#3C5A99" />
						</Button>
					</View>
					
				</View>
				<View className="mt-8 mb-4 flex-row justify-center items-center gap-2">
					<Text className="text-sm text-center text-gray-500">Don't have an account?</Text>
					<Link className='text-sm text-center text-[#045883] font-semibold' href='/signUp'>Sign Up</Link>
				</View>
				
			</View>
		</CustomKeyboardView>
	);
};

export default SignIn;
