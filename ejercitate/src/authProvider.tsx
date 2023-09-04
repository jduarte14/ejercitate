import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLogged, setUserLog] = useState(false);
  const [userData, setUserData] = useState('');

  const handleUser = async () => {
    try {
      const getAuth = await AsyncStorage.getItem('logged');
      const getUserData = await AsyncStorage.getItem('user');

      if (getAuth || getUserData) {
        setUserLog(true);
        setUserData(getUserData);
        console.log('logueado');
        
      } else {
        setUserLog(false);
        await AsyncStorage.removeItem('logged');
        await AsyncStorage.removeItem('user');
      }
    } catch (error) {
      console.error('No hay un usuario con esta key en el storage');
    }
  };

  useEffect(() => {
    handleUser();
  }, []);

  return (
    <AuthContext.Provider value={{ userLogged, setUserLog, userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
