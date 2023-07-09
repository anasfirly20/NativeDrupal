import { View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcon } from './Icon'

interface Props {
    name: string,
    label?: string,
    onPress: () => void;
  }

const HeaderCustom = ({name, label, onPress} : Props) => {
  return (
    <View>
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={{paddingHorizontal: 10, flexDirection: "row", alignItems: "center", gap:5}}
            >
            <Text style={{fontWeight: "600", fontSize: 15}}>{label}</Text>
                <MaterialIcon size="large" color="black" name={name} />
            </TouchableOpacity>
        </View>
  )
}

export default HeaderCustom