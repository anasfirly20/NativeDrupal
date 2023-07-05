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
    FlatList
  } from "react-native";
  import React, {useState, useEffect} from "react";

// Api
import newsApi from "./news.api";
import { create } from "apisauce";

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import { loginStyle } from "../styles/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Utils
import { getAccessToken, getUID, getClient } from "../utils";

// Styles
import { newsStyle } from "../styles/News";

// Components
import ButtonCustom from "../components/ButtonCustom";

interface Props {
    navigation: NavigationProp<any>;
    route: any
  }
  
  const NewsScreen = ({navigation, route}: Props) => {
    const { handleAction } = route.params;

    const [data, setData] = useState({
      "access-token": "",
      uid: "",
      client: ""
    })
    
    const getLocals = async () => {
      const accessToken = await getAccessToken();
      const client = await getClient();
      const uid = await getUID();
    
      setData({
        ...data,
        "access-token": accessToken || "",
        client: client || "",
        uid: uid || "",
      });
    };
    

  useEffect(() => {
    getLocals()
  },[])

  const [news, setNews] = useState()
  
  const getAllNews = async () => {
    try {
      const res = await newsApi.getAllNews({
        "access-token": data?.["access-token"],
        "client": data?.client,
        "uid": data?.uid,
      })
      const news = res?.data?.news
      setNews(news)
      // news?.map((e) => console.log(e?.id))
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(() => {
    getAllNews()
  }, [])

  // news.map((e) => console.log(e?.title))
  
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: "white"}}>
      <View style={newsStyle.container}>
        <ButtonCustom
        styleTO={loginStyle.buttonContainer}
        styleText={loginStyle.buttonLabel}
        labelTO="Logout"
        onPress={handleAction}
        />
      </View>
    </SafeAreaView>
  )
}

export default NewsScreen