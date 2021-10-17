import React, {useState} from 'react';
import {useColorScheme} from 'react-native';
import {DayTheme, NightTheme} from '../shared/constants';
import ApiClient from '../shared/core/api-client';
import ApiClientContext from '../shared/providers/api-client-context';
import StyleContext from '../shared/providers/style-context';

export default function GlobalProviders(props) {
  return (
    <StyleProvider>
      <ApiClientProvider>{props.children}</ApiClientProvider>
    </StyleProvider>
  );
}

function StyleProvider(props) {
  const [theme, setTheme] = useState(
    useColorScheme() === 'dark' ? NightTheme : DayTheme,
  );
  return (
    <StyleContext.Provider value={{theme: theme, callback: setTheme}}>
      {props.children}
    </StyleContext.Provider>
  );
}

function ApiClientProvider(props) {
  const apiClient = new ApiClient('https://api.spacexdata.com/');
  return (
    <ApiClientContext.Provider value={apiClient}>
      {props.children}
    </ApiClientContext.Provider>
  );
}
