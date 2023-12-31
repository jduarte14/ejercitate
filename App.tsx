import React from 'react';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Components
import HomeContent from './src/components/HomeContent';
import InstructorsCatalog from './src/components/instructorsCatalog/instructorsCatalog';
import Login from './src/components/authentication/user/login';
import Register from './src/components/authentication/user/register';
import OwnerLogin from './src/components/authentication/owner/login';
import OwnerRegistration from './src/components/authentication/owner/register';
import InstructorLogin from './src/components/authentication/instructor/login';
import InstructorRegister from './src/components/authentication/instructor/register';
import Account from './src/components/Account';
import InstructorList from './src/components/instructorsCatalog/instructorList';
import Stores from './src/components/Stores';

//Providers 
import { UserProvider } from './src/context/userContext';
import { GymProvider } from './src/context/gymContext';
import { InstructorProvider } from './src/context/instructorContext';
import { ProductProvider } from './src/context/productContext';

function App() {
  const Stack = createNativeStackNavigator();
  const [userLogged, setUserLog] = useState(false);
  const [userData, setUserData] = useState(null);


  const handleUser = async () => {
    try {
      const [getAuth, getUserData] = await Promise.all([
        AsyncStorage.getItem('logged'),
        AsyncStorage.getItem('user'),
        AsyncStorage.getItem('userData'),
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

  useEffect(() => {
    handleUser();
  }, [])

  return (
    <UserProvider>
      <GymProvider>
        <InstructorProvider>
          <ProductProvider>
            <NavigationContainer>
              <Stack.Navigator>
                {userLogged ? (
                  <>
                    <Stack.Screen name="Home" component={HomeContent} options={{ headerShown: false }} />
                    <Stack.Screen name="Instructores" component={InstructorsCatalog} options={{ headerShown: false }} />
                    <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} initialParams={{ userLogged, userData, setUserData, setUserLog: setUserLog }} />
                    <Stack.Screen name="Stores" component={Stores} options={{ headerShown: false }} />
                    <Stack.Screen name="InstructorList" component={InstructorList} options={{headerShown:false}} ></Stack.Screen>
                  </>
                ) : (<>
                  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} initialParams={{ userLogged: userLogged, setUserLog: setUserLog }} />
                  <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} initialParams={{ userLogged: userLogged, setUserLog: setUserLog }} />
                  <Stack.Screen name="OwnerLogin" component={OwnerLogin} options={{ headerShown: false }} />
                  <Stack.Screen name="OwnerRegistrarion" component={OwnerRegistration} options={{ headerShown: false }} initialParams={{ userLogged: userLogged, setUserLog: setUserLog }} />
                  <Stack.Screen name="InstructorLogin" component={InstructorLogin} options={{ headerShown: false }} />
                  <Stack.Screen name="InstructorRegister" component={InstructorRegister} options={{ headerShown: false }} initialParams={{ userLogged: userLogged, setUserLog: setUserLog }} />
                </>
                )}
              </Stack.Navigator>
            </NavigationContainer>
          </ProductProvider>
        </InstructorProvider>
      </GymProvider>
    </UserProvider>

  );
}

export default App;
