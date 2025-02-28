
import AsyncStorage from '@react-native-async-storage/async-storage';


// Function to save data
export const saveData = async (key,data) => {
    try {
      await AsyncStorage.setItem(key, data);
      console.log('Success', 'Data saved successfully!');
    } catch (error) {
      console.log('Error', 'Failed to save data');
    }
  };

  // Function to retrieve data
 export const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value
      } else {
        console.log('Info', 'No data found');
      }
    } catch (error) {
      console.log('Error', 'Failed to retrieve data');
    }
  };

  // Function to remove data
 export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Success', 'Data removed successfully!');
    } catch (error) {
      console.log('Error', 'Failed to remove data');
    }
  };