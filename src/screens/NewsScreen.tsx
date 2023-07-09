import {
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";

// Api
import newsApi from "./news.api";

// Utils
import { getAccessToken, getUID, getClient } from "../utils";

// Styles
import { newsStyle } from "../styles/News";

// Components
import CardNews from "../components/CardNews";
import HeaderCustom from "../components/HeaderCustom";

// Types
import { IProps, IUserData } from "../types/types";

// Miscellaneous
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IData {
  "access-token": string;
  uid: string;
  client: string;
}

const NewsScreen = ({ navigation, route }: IProps) => {
  const { handleAction } = route.params;

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

  // NEWS
  const [news, setNews] = useState<Array<any>>([]);

  // GET ALL NEWS
  const getAllNews = async () => {
    try {
      console.log("TRIGGER")
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
  
  useEffect(() => {
    getLocals();
    getAllNews();
  }, []);

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
          onPress={handleAction}
        />
      </View>
      <Text style={newsStyle.textHeader}>News Feed</Text>
      <View style={newsStyle.contentContainer}>
        <FlatList
          // style={{ paddingHorizontal: 5 }}
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