import React from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DasboardScreen from './features/dashboard/screens/dashboard';
import DefaultStyles from './shared/styles/theme.style'
import CompanyInfoScreen from './features/company_info/screens/company_info';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard' screenOptions={{ title: 'SpaceX' }}>
        <Stack.Screen name='Dashboard' component={DasboardScreen} />
        <Stack.Screen name='CompanyInfo' component={CompanyInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
