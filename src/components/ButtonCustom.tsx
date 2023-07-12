import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import React from 'react';

interface ButtonCustomProps {
  styleTO?: ViewStyle;
  onPress: () => void;
  styleText?: TextStyle;
  labelTO: string;
}

const ButtonCustom = ({
  styleTO,
  onPress,
  styleText,
  labelTO,
}: ButtonCustomProps) => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styleTO} onPress={onPress}>
      <Text style={styleText}>{labelTO}</Text>
    </TouchableOpacity>
  );
};

export default ButtonCustom;
