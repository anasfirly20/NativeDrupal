import React, { useEffect, useState } from "react";

import {
  Text,
  View,
  Image,
  SafeAreaView,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Platform
} from "react-native";

// Styles
import { loginStyle } from "../styles/Login";

// Components
import Input from "../components/Input";
import ButtonCustom from "../components/ButtonCustom";

// Api
import newsApi from "./news.api";

// Types
import { ILoginFormData } from "../types/types";

// Redux
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


interface IProps {
    navigation: NavigationProp<any>;
    // route: any
  }

const LoginScreen = ({navigation} : IProps) => {
  const dispatch = useDispatch();
  
  const [data, setData] = useState<ILoginFormData>({
    email: "",
    password: ""
  })

  const handleLogin = async () => {
      try {
        if (data?.email && data?.password) {
          const res = await newsApi.SignIn(data);
          if (res?.ok) {
            const userData = res?.data?.user
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            
            const headers = res?.headers;
            const accessToken = headers?.["access-token"];
            const uid = headers?.["uid"];
            const client = headers?.["client"];
            if (accessToken && uid && client) {
              await AsyncStorage.multiSet([
                ["access-token", accessToken],
                ["uid", uid],
                ["client", client],
              ]);
            }
            dispatch(login())
          } else {
            Alert.alert("Login failed");
          }
        } else {
          Alert.alert("Missing Email / Password");
        }
      } catch (err) {
        Alert.alert("Error", "An error occurred while logging in.");
      }
    };

    const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 0;
return (
  <KeyboardAwareScrollView>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
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
              <ButtonCustom
                styleTO={loginStyle.buttonContainer}
                styleText={loginStyle.buttonLabel}
                labelTO="Login"
                onPress={handleLogin}
                />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default LoginScreen;