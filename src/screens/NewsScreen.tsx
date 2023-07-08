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

// Miscellaneous
import { NavigationProp } from "@react-navigation/native";
import { loginStyle } from "../styles/Login";

// Utils
import { getAccessToken, getUID, getClient, filterText, getUserData } from "../utils";

// Styles
import { newsStyle } from "../styles/News";

// Components
import ButtonCustom from "../components/ButtonCustom";
import CardNews from "../components/CardNews";
import HeaderCustom from "../components/HeaderCustom";

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
    
    // GET LOCAL STORAGE ITEMS
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
  
  // GET ALL NEWS
  const getAllNews = async () => {
    try {
      const res = await newsApi.getAllNews({
        "access-token": data?.["access-token"],
        "client": data?.client,
        "uid": data?.uid,
      })
      const news = res?.data?.news
      setNews(news)
    } catch (error) {
      console.log(error);
      
    }
  }
  
  useEffect(() => {
    getAllNews()
  }, [])

    // function navigate to show news details
    const handleCardPress = (id: number) => {
      navigation.navigate('News Details', {id})
    }
  
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: "row", justifyContent: "space-between" ,alignItems: "center", paddingHorizontal: 10}}>
          <Text style={newsStyle.textHeader}>News Feed</Text>
          <HeaderCustom
          label="Logout"
          name="logout"
          onPress={handleAction}
          />
        </View>
        <View style={newsStyle.contentContainer}>
          <FlatList
            style={{ paddingHorizontal: 5}}
            data={news}
            renderItem={({item}) => (
              <CardNews
              title={item?.title}
              description={item?.short_text}
              source={item?.image_url}
              onPress={() => {
                  console.log("INITIAL ID>>", item?.id)
                  handleCardPress(item?.id)
                }}
              />
            )}
            ItemSeparatorComponent={() => <View style={{height: 15}} />}
            showsVerticalScrollIndicator={false}
          />
        </View>
    </SafeAreaView>
  )
}

export default NewsScreen