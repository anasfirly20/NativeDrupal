import {
    Text,
    View,
    Image,
    SafeAreaView,
  } from "react-native";
  import React, {useState, useEffect} from "react";

// Api
import newsApi from "./news.api";
import { NavigationProp, useRoute } from "@react-navigation/native";

// Style
import { newsDetailsStyle } from "../styles/NewsDetails";

// Utils
import { filterText, formatDate } from "../utils";

// Components
import HeaderCustom from "../components/HeaderCustom";

// Types
import { INewsDetail } from "../types/types";

interface Props {
    navigation: NavigationProp<any>
}

const NewsDetailsScreen = ({navigation} : Props) => {
    const route: any = useRoute()
    const {id} = route.params
    
    const [data, setData] = useState<INewsDetail>()

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
        getNewsById(id)
    }, [])

  return (
    <SafeAreaView>
       <HeaderCustom 
       name="arrow-left"
       onPress={() => navigation.goBack()}
       />
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
                {data?.short_text && filterText(data?.short_text)}
            </Text>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default NewsDetailsScreen