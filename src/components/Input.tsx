import {
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
  } from "react-native";
  import React from "react";

// Styles
import { inputStyle } from "../styles/Input";

const Input = ({
    label,
    placeholder,
    onChangeText,
    secureTextEntry,
    keyboardType,
 }) => {
  return (
    <View style={inputStyle.inputContainer}>
        {/* <Text>{label}</Text> */}
        <TextInput placeholder={placeholder} style={inputStyle.input} />
    </View>
  )
}

export default Input