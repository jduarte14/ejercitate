import AsyncStorage from '@react-native-async-storage/async-storage';

const unLogSession = async () => {
    try {
        await AsyncStorage.clear();

    }
    catch (error) {
        console.error("There was an error setting the session storage", error);
    }
}


export default unLogSession;