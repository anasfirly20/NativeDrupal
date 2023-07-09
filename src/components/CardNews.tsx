import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

// Styles
import { newsStyle } from '../styles/News'

// Utils
import { filterText, textEllipsis } from '../utils'

// types
interface Props {
    title: string;
    description: string;
    source: string;
    onPress?: () => void; 
  }


  

const CardNews = ({title, description, source, onPress }: Props) => {
  return (
    <Pressable
    onPress={onPress}
    >
        <View style={newsStyle.cardContainer}>
        <View style={newsStyle.descContainer}>
        <Text style={newsStyle.descTextHeader}>{title}</Text>
        <Text style={newsStyle.descText}>{description && filterText(textEllipsis(description))}</Text>
        </View>
        <Image source={{ uri: source }} style={newsStyle.cardImage} />
          </View>
    </Pressable>
  )
}

export default CardNews