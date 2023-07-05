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
  } from "react-native";
  import React from "react";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import { loginStyle } from "../styles/Login";

interface Props {
    navigation: NavigationProp<any>;
    route: any
  }

const NewsScreen = ({navigation, route}: Props) => {
  const { handleAction } = route.params;
  
  return (
    <SafeAreaView>
      <Text>NewsScreen</Text>
      <TouchableOpacity
                activeOpacity={0.7}
                style={loginStyle.buttonContainer}
                onPress={() => {
                    handleAction()
                }}
                >
                <Text style={loginStyle.buttonLabel}>
                    Logout
                </Text>
            </TouchableOpacity>
    </SafeAreaView>
  )
}

export default NewsScreen