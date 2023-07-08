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

// Get Data user
export const getUserData = async (): Promise<void> => {
  try {
    await AsyncStorage.getItem("userData")
  } catch (error) {
    console.log(error);
    
  }
}

// Filter text
export const filterText = (text: string) => {
  return text.replace(/<\/?p>/g, '')
}

// Date format
export const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInSec = Math.floor(diffInMs / 1000);

  switch (true) {
    case diffInSec < 60:
      return `${diffInSec} seconds ago`;
    case diffInSec < 60 * 60:
      const diffInMin = Math.floor(diffInSec / 60);
      return `${diffInMin} minutes ago`;
    case diffInSec < 60 * 60 * 24:
      const diffInHr = Math.floor(diffInSec / (60 * 60));
      return `${diffInHr} hours ago`;
    default:
      const diffInDay = Math.floor(diffInSec / (60 * 60 * 24));
      return `${diffInDay} days ago`;
  }
};