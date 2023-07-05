import React, { useEffect, useState } from "react";

import {
  Button,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  View,
  KeyboardAvoidingView,
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

// Styles
import { loginStyle } from "../styles/AuthStyles";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";

interface Props {
    navigation: NavigationProp<any>;
  }

const LoginScreen = ({navigation} : Props) => {

    return (
        <SafeAreaView>
            <View>
                <Text style={loginStyle.text}>
                    THIS IS LOGIN
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen;