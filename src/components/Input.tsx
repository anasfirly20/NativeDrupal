import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React from 'react';

// Styles
import {inputStyle} from '../styles/Input';

//
interface Props {
  placeholder: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
}

const Input = ({
  placeholder,
  onChangeText,
  secureTextEntry,
  keyboardType,
}: Props) => {
  return (
    <View style={inputStyle.inputContainer}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={inputStyle.input}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Input;
