import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";

// Components
import CardNews from "../components/CardNews";
import HeaderCustom from "../components/HeaderCustom";

// Styles
import { newsStyle } from "../styles/News";

// Api
import newsApi from "./news.api";

// Utils
import { getAccessToken, getUID, getClient, removeAccessToken } from "../utils";

// Miscellaneous
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from 'react-redux';
import { logout } from "../redux/authSlice";

// Types
import { IProps, IUserData } from "../types/types";

interface IData {
  "access-token": string;
  uid: string;
  client: string;
}

const NewsScreen = ({ navigation }: IProps) => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await removeAccessToken()
    dispatch(logout());
  };

  const [data, setData] = useState<IData>({
    "access-token": "",
    uid: "",
    client: "",
  });

  const [userData, setUserData] = useState<IUserData | null>(null);

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

    const userDataString = await AsyncStorage.getItem("userData");
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  };

  useEffect(() => {
    console.log("EXECUTED")
    if(data){
      getAllNews()
    }
    getLocals()
  },[data?.["access-token"]])

  // NEWS
  const [news, setNews] = useState<Array<any>>([]);

  // GET ALL NEWS
  const getAllNews = async () => {
    try {
      const res = await newsApi.getAllNews({
        "access-token": data?.["access-token"],
        client: data?.client,
        uid: data?.uid,
      });
      const news = res?.data?.news;
      setNews(news);
    } catch (error) {
      console.log(error);
    }
  };
  
  // useEffect(() => {
  //   const getData = async () => {
  //     await getLocals();
  //     await getAllNews();
  //   };
  //   getData();
  // }, []);

  
  // function navigate to show news details
  const handleCardPress = (id: number) => {
    navigation.navigate("NewsDetails", { id });
  };

  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={newsStyle.profileContainer}>
        <View style={newsStyle.profileData}>
          <Image
            source={{ uri: userData?.avatar_url }}
            style={newsStyle.profileImage}
          />
          <Text style={newsStyle.profileName}>
            {userData?.username && userData?.username}
          </Text>
        </View>
        <HeaderCustom
          label="Logout"
          name="logout"
          onPress={handleLogout}
        />
      </View>
      <Text style={newsStyle.textHeader}>News Feed</Text>
      <View style={newsStyle.contentContainer}>
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <CardNews
              title={item?.title}
              description={item?.short_text}
              source={item?.image_url}
              onPress={() => {
                handleCardPress(item?.id);
              }}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;