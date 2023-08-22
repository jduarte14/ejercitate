import AsyncStorage from '@react-native-async-storage/async-storage';

const setLoggedSession = async (value, key) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
        console.log('session agregado');

    }
    catch (error) {
        console.error("There was an error setting the session storage", error);
    }
}


export default setLoggedSession;