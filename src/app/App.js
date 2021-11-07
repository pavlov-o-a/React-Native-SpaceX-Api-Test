import React from 'react';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DasboardScreen from '../features/dashboard/screens/dashboard';
import CompanyInfoScreen from '../features/company-info/screens/company-info';
import LaunchesScreen from '../features/launches/screens/launches';
import GlobalProviders from './init-providers';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <GlobalProviders>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          screenOptions={{title: 'SpaceX'}}>
          <Stack.Screen name="Dashboard" component={DasboardScreen} />
          <Stack.Screen name="CompanyInfo" component={CompanyInfoScreen} />
          <Stack.Screen name="Launches" component={LaunchesScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalProviders>
  );
};

export default App;
