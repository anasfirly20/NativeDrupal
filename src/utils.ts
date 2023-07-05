import AsyncStorage from '@react-native-async-storage/async-storage';

// GET ACCESS TOKEN
export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      return token;
    } else {
      return;
    }
  } catch (err) {
    console.log(err);
  }
};

export const removeAccessToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('accessToken');
  } catch (err) {
    console.log(err);
  }
};