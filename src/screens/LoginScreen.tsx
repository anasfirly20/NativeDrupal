import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
  Alert
} from "react-native";

// Styles
import { loginStyle } from "../styles/Login";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import { create } from "apisauce";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Components
import Input from "../components/Input";
import { inputStyle } from "../styles/Input";

// 
interface Props {
    navigation: NavigationProp<any>;
  }

  const api = create({
    baseURL: "https://lzone.secret-agents.ru/api/v2"
  })

const LoginScreen = ({navigation} : Props) => {
    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleLogin = async () => {
        try {
            if(data?.email && data?.password){
                const res = await api.post("/auth/sign_in", data)
                if(res?.ok){
                    const accessToken = res?.headers?.["access-token"];
                    if(accessToken){
                        await AsyncStorage.setItem('accessToken', accessToken);
                    }
                    console.log(accessToken)
                    navigation.navigate('News');
                } else {
                    Alert.alert('Login failed')
                }
            }
        } catch(err){
            Alert.alert('Error', 'An error occurred while logging in.');
        }
    }

    
return (
    <SafeAreaView style={loginStyle.container}>
        <View>
            <View>
            <Image source={require('../assets/login.png')} style={loginStyle.img} />
            </View>
            <View style={loginStyle.content}>
                <Text style={loginStyle.textHeader}>
                    Login
                </Text>
                <Input 
                placeholder="Email ID"
                keyboardType="email-address"
                onChangeText={(e: string) => setData({...data, email: e})}
                />
                <Input 
                placeholder="Password" 
                onChangeText={(e: string) => setData({...data, password: e})}
                secureTextEntry={true}
                />
                <Text style={loginStyle.textForgotPass}>Forgot Password?</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={loginStyle.buttonContainer}
                onPress={() => {
                    handleLogin()
                }}
                >
                <Text style={loginStyle.buttonLabel}>
                    Login
                </Text>
            </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
    )
}

export default LoginScreen;