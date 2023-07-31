import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeContent from './src/components/HomeContent';
import InstructorsCatalog from './src/components/instructorsCatalog/instructorsCatalog';

function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeContent} options={{ headerShown: false }} />
          <Stack.Screen name="Instructores" component={InstructorsCatalog} options={{ headerShown: false }} />
        </Stack.Navigator>

      </NavigationContainer>

    </>
  );
}

export default App;
