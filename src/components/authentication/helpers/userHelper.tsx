import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const handleUser = async () => {
    const [userLogged, setUserLog] = useState(false);
    const [userData, setUserData] = useState('');
    try {
        const [getAuth, getUserData] = await Promise.all([
            AsyncStorage.getItem('logged'),
            AsyncStorage.getItem('user')
        ]);

        if (getAuth || getUserData) {
            setUserLog(true);
            setUserData(getUserData);
        } else {
            setUserLog(false);
            await AsyncStorage.multiRemove(['logged', 'user']);
        }
    } catch (error) {
        console.error('Error al obtener datos de AsyncStorage:', error.message);
    }
};


export default handleUser;