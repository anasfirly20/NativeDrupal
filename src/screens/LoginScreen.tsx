import React, { useEffect, useState } from "react";

import {
  TouchableOpacity,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";

// Styles
import { loginStyle } from "../styles/Login";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import loginImg from "../assets/nativeLogin.png"

// Components
import Input from "../components/Input";
import { inputStyle } from "../styles/Input";
interface Props {
    navigation: NavigationProp<any>;
  }

const LoginScreen = ({navigation} : Props) => {

return (
    <SafeAreaView style={loginStyle.container}>
        <View>
            <View>
                <Image source={loginImg} style={loginStyle.img} />
            </View>
            <View style={loginStyle.content}>
                <Text style={loginStyle.textHeader}>
                    Login
                </Text>
                <Input label="Email" placeholder="Email ID" />
                <Input label="Password" placeholder="Password" />
                <Text style={loginStyle.textForgotPass}>Forgot Password?</Text>
            <TouchableOpacity
                activeOpacity={0.7}
                style={loginStyle.buttonContainer}>
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