import { View, Text, Pressable } from 'react-native'
import { MaterialIcon } from './Icon'

interface Props {
    onPress: () => void;
  }

const HeaderCustom = ({onPress} : Props) => {
  return (
    <View style={{paddingHorizontal: 18}}>
            <Pressable
           onPress={onPress}
            >
                <MaterialIcon size="large" color="black" name="arrow-left" />
            </Pressable>
        </View>
  )
}

export default HeaderCustom