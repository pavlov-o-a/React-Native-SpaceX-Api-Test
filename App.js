import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DasboardScreen from './features/dashboard/screens/dashboard';
import DefaultStyles from './shared/styles/theme.style'

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={DasboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
