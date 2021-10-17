import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import CompanyInfoScreen from '../../../features/company-info/screens/company-info';
import TestGlobalProviders from '../../app/test-global-providers';
import ApiClient from '../../../shared/core/api-client';

const apiClient = new ApiClient();
const companyResponse =
  '{"headquarters":{"address":"Rocket Road","city":"Hawthorne","state":"California"},"name":"SpaceX","founder":"Elon Musk","founded":2002,"ceo":"Elon Musk","valuation":52000000000,"summary":"SpaceX designs"}';
jest
  .spyOn(apiClient, 'fetchJson')
  .mockImplementation(request => Promise.resolve(companyResponse));

it('render company info screen', async () => {
  const screenRender = render(
    <TestGlobalProviders apiClient={apiClient}>
      <CompanyInfoScreen />
    </TestGlobalProviders>,
  );
  await waitFor(() => screenRender.getByText('Elon Musk'));
});
