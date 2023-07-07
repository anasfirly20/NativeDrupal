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

// Style
import { newsDetailsStyle } from "../styles/NewsDetails";

// Utils
import { filterText, formatDate } from "../utils";

// types
type NewsDetail = {
    title: string;
    created_at: any;
    image_url: string;
    short_text: string
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
      <View style={newsDetailsStyle.container}>
        <Text style={newsDetailsStyle.title}>
            {data?.title}
        </Text>
            <View style={newsDetailsStyle.authorContainer}>
                <Text style={newsDetailsStyle.author}>User</Text>
                <Text style={newsDetailsStyle.dateCreated}>{data?.created_at && formatDate(data?.created_at)}</Text>
            </View>
            <View style={newsDetailsStyle.imgContainer}>
                <Image  source={{uri : data?.image_url}}
                style={newsDetailsStyle.image}
                />
            </View>
            <View style={newsDetailsStyle.descContainer}>
            <Text style={newsDetailsStyle.descText}>
                {data?.short_text && filterText(data?.short_text)}.
            </Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default NewsDetailsScreen