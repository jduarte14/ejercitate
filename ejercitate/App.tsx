import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeContent from './src/components/HomeContent';
import InstructorsCatalog from './src/components/instructorsCatalog/instructorsCatalog';
import Login from './src/components/authentication/user/login';
import Register from './src/components/authentication/user/register';
import OwnerLogin from './src/components/authentication/owner/login';
import OwnerRegistration from './src/components/authentication/owner/register';
import InstructorLogin from './src/components/authentication/instructor/login';
import InstructorRegister from './src/components/authentication/instructor/register';
import Account from './src/components/Account';

function App() {
  const Stack = createNativeStackNavigator();


  const [userLogged, setUserLog] = useState(false);
  const [userData, setUserData] = useState('');

  const handleUser = async () => {
    try {
      const getAuth = await AsyncStorage.getItem('logged');
      const getUserData = await AsyncStorage.getItem('user');

      if (getAuth) {
        setUserLog(true);
        setUserData(getUserData);
      }

    }
    catch (error) {
      console.error('No hay un usuario con esta key en el storage');
    }

  }

  useEffect(() => {
    handleUser();
  }, [])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          {userLogged ? (
            <>
              <Stack.Screen name="Home" component={HomeContent} options={{ headerShown: false }} />
              <Stack.Screen name="Instructores" component={InstructorsCatalog} options={{ headerShown: false }} />
              <Stack.Screen name="Account" component={Account} initialParams={{ userData: userData }}
                options={{ headerShown: false }} />
            </>
          ) : (<>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="OwnerLogin" component={OwnerLogin} options={{ headerShown: false }} />
            <Stack.Screen name="OwnerRegistrarion" component={OwnerRegistration} options={{ headerShown: false }} />
            <Stack.Screen name="InstructorLogin" component={InstructorLogin} options={{ headerShown: false }} />
            <Stack.Screen name="InstructorRegister" component={InstructorRegister} options={{ headerShown: false }} />
          </>
          )}


        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

export default App;
