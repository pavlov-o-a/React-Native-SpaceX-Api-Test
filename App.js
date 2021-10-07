import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';

import DasboardScreen from './features/dashboard/screens/dashboard';
import CompanyInfoScreen from './features/company-info/screens/company-info';
import StyleContext from './shared/styles/style-context';
import StyleDay from './shared/styles/theme-style-day';
import StyleNight from './shared/styles/theme-style-day';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <StyleContext.Provider value={isDarkMode ? StyleNight : StyleDay}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{title: 'SpaceX'}}>
          <Stack.Screen name="Dashboard" component={DasboardScreen} />
          <Stack.Screen name="CompanyInfo" component={CompanyInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </StyleContext.Provider>
  );
};

export default App;
