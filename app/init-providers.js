import React from 'react';
import {useColorScheme} from 'react-native';
import {DayTheme, NightTheme} from '../shared/constants';
import ApiRequest from '../shared/entities/api-request';
import BaseRequestContext from '../shared/providers/base-request-context';
import StyleContext from '../shared/providers/style-context';

export default function GlobalProviders(props) {
  return (
    <StyleProvider>
      <BaserRequestProvider>{props.children}</BaserRequestProvider>
    </StyleProvider>
  );
}

function StyleProvider(props) {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <StyleContext.Provider value={isDarkMode ? NightTheme : DayTheme}>
      {props.children}
    </StyleContext.Provider>
  );
}

function BaserRequestProvider(props) {
  const baseRequest = new ApiRequest('https://api.spacexdata.com/');
  return (
    <BaseRequestContext.Provider value={baseRequest}>
      {props.children}
    </BaseRequestContext.Provider>
  );
}
