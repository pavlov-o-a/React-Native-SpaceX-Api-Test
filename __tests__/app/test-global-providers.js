import React from 'react';
import {StyleProvider} from '../../app/init-providers';
import ApiClientContext from '../../shared/providers/api-client-context';

export default function TestGlobalProviders(props) {
  const mockedClient = props.apiClient;
  return (
    <StyleProvider>
      <TestApiClientProvider apiClient={mockedClient}>
        {props.children}
      </TestApiClientProvider>
    </StyleProvider>
  );
}

function TestApiClientProvider(props) {
  const apiClient = props.apiClient;
  return (
    <ApiClientContext.Provider value={apiClient}>
      {props.children}
    </ApiClientContext.Provider>
  );
}
