import { View, Text, Pressable } from 'react-native'
import { MaterialIcon } from './Icon'

interface Props {
    name: string,
    label?: string,
    onPress: () => void;
  }

const HeaderCustom = ({name, label, onPress} : Props) => {
  return (
    <View style={{paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap:5}}>
            <Text style={{fontWeight: "600", fontSize: 15}}>{label}</Text>
            <Pressable
           onPress={onPress}
            >
                <MaterialIcon size="large" color="black" name={name} />
            </Pressable>
        </View>
  )
}

export default HeaderCustom