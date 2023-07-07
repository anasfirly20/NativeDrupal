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
import { useRoute } from "@react-navigation/native";

type NewsDetail = {
    title: string;
    // Add other properties as needed
};

const NewsDetailsScreen = () => {
    const route: any = useRoute()
    const {id} = route.params
    
    const [data, setData] = useState<NewsDetail>()

    // Get news by id
    const getNewsById = async (id: number) => {
        try {
            const res = await newsApi.getNewsById(id)
            const newsDetail = res?.data?.news
            setData(newsDetail)
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        console.log("ID VTOROI >>", id);
        getNewsById(id)
    }, [])

    
  return (
    <SafeAreaView>
      <Text>NewsDetailsScreen</Text>
      <View>
        <Text>
            {data?.title && data?.title || ""}
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default NewsDetailsScreen