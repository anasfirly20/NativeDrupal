import AsyncStorage from '@react-native-async-storage/async-storage';

// GET ACCESS TOKEN
export const getAccessToken = async () => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if(token){
          console.log(">>>TOKEN", token)
          return token
        } else {
          return
        }
      } catch (err) {
        console.log(err)
      }
}