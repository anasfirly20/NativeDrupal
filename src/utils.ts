import AsyncStorage from '@react-native-async-storage/async-storage';

// Get access token
export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const token = await AsyncStorage.getItem('access-token');
    return token || undefined;
  } catch (err) {
    console.log('Error getting access token:', err);
  }
};

// Get UID
export const getUID = async (): Promise<string | undefined> => {
  try {
    const uid = await AsyncStorage.getItem('uid');
    return uid || undefined;
  } catch (err) {
    console.log('Error getting UID:', err);
  }
};

// Get client
export const getClient = async (): Promise<string | undefined> => {
  try {
    const client = await AsyncStorage.getItem('client');
    return client || undefined;
  } catch (err) {
    console.log('Error getting client:', err);
  }
};

// Remove access token
export const removeAccessToken = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('access-token');
  } catch (err) {
    console.log('Error removing access token:', err);
  }
};

// 
export const filterText = (text: string) => {
  return text.replace(/<\/?p>/g, '')
}