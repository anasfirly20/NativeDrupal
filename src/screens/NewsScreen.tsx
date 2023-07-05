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

interface Props {
    navigation: NavigationProp<any>;
  }

const NewsScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Text>NewsScreen</Text>
    </SafeAreaView>
  )
}

export default NewsScreen