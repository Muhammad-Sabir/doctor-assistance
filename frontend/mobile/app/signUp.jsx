import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, TextInput, Alert} from 'react-native';
import Button from "../components/Button"
import { Link} from 'expo-router';
import GoogleLogo from '../assets/images/SVG/GoogleLogo';
import { FontAwesome } from '@expo/vector-icons';
import CustomKeyboardView from "../components/CustomKeyboardView"
import { useAuthContext } from '../contexts/AuthContext';

const SignUp = () => {
	const {register} = useAuthContext();
	const [user, setUser] = useState({
		name:"",
		email:"",
		phoneNo: "",
		password: ""
	})

	const [activeTab, setActiveTab] = React.useState('Patient');
	const handleTabChange = (tab) => {
		setActiveTab(tab);
	};

	const handleSignUp = async () => {
		if (user.email === ""  || user.password === "" || user.name === "") {
			Alert.alert("Empty Fields", "Please fill all the fields")
			return 
		}

		
		register(user.name, user.email, user.phoneNo, user.password, activeTab, (success, error) => {
			if (!success && error) {
				console.error("Registration Error:", error);
				Alert.alert("Registration Failed", "An error occurred while registering. Please try again later.");
			} else if (!success) {
				Alert.alert("Registration Failed", "Email/phone is already registered. Please use a different email/phone.");
			}
		});
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
					<Text className="text-[1.6rem] font-semibold tracking-tighter">Sign Up</Text>
					
					<View className="gap-3">
						<View className="w-full  bg-[#dadbdc] rounded-xl p-1 flex-row items-center justify-between">
							<Button className={`w-[42vw] rounded-xl ${activeTab === 'Patient'? "bg-[#045883]": ""}`} onPress={()=>handleTabChange("Patient")}>
								<Text className={`font-bold ${activeTab === 'Patient'? "text-white": "text-[#045883]"}`}>Patient</Text>
							</Button>
							<Button className={`w-[42vw] rounded-xl ${activeTab === 'Doctor'? "bg-[#045883]": ""}`} onPress={()=>handleTabChange('Doctor')}>
								<Text className={`font-bold ${activeTab === 'Doctor'? "text-white": "text-[#045883]"}`}>Doctor</Text>
							</Button>
						</View>
						<View className="gap-2">
							<Text className="text-black text-sm">Name</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your name"
								value={user.name}
								onChangeText={value => setUser(prev => ({...prev, name: value}))}
							/>
						</View>

						<View className="gap-2">
							<Text className="text-black text-sm">Email address</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your email"
								value={user.email}
								onChangeText={value => setUser(prev => ({...prev, email: value}))}
							/>
						</View>

						<View className="gap-2">
							<Text className="text-black text-sm">Phone Number</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your Phone Number"
								inputMode='tel'
								value={user.phoneNo}
								onChangeText={value => setUser(prev => ({...prev, phoneNo: value}))}
							/>
						</View>

						<View className="gap-2">
							<Text className="text-black text-sm">Password</Text>
							<TextInput
								className="w-full py-2 px-2 rounded-lg border border-gray-300 text-sm"
								placeholder="Enter your password"
								secureTextEntry={true}
								autoCapitalize='none'
								value={user.password}
								onChangeText={value => setUser(prev => ({...prev, password: value}))}
							/>
						</View>

					</View>
					<Button
						className="bg-[#045883] mt-2 w-full"
						onPress= {handleSignUp}
					>
						<Text className="text-white font-bold">Sign Up</Text>
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
				<View className="mt-8 flex-row justify-center items-center gap-2 mb-4">
					<Text className="text-sm text-center text-gray-500">Already have an account?</Text>
					<Link className='text-sm text-center text-[#045883] font-semibold' href='/signIn'>Login</Link>
				</View>
				
			</View>
		</CustomKeyboardView>
	);
};

export default SignUp;
