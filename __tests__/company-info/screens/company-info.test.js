import React from 'react';
import {cleanup, render, waitFor} from '@testing-library/react-native';
import CompanyInfoScreen from '../../../features/company-info/screens/company-info';
import TestGlobalProviders from '../../app/test-global-providers';
import ApiClient from '../../../shared/core/api-client';

const apiClientMock = new ApiClient();
const companyInfoResponseGood = {
  headquarters: {city: 'Hawthorne'},
  founder: 'Elon Musk',
  founded: 2002,
  valuation: 52000000000,
  summary: 'SpaceX designs',
};
const companyInfoResponseBad = {};

beforeEach(() => {
  jest.useFakeTimers();
});

it('When open screen Then shows loading', async () => {
  const screenRender = render(
    <TestGlobalProviders apiClient={apiClientMock}>
      <CompanyInfoScreen />
    </TestGlobalProviders>,
  );
  await waitFor(() => screenRender.getByLabelText('Loading'));
});

it('Given good response When open screen Then render data', async () => {
  jest
    .spyOn(apiClientMock, 'fetchJson')
    .mockImplementation(request => Promise.resolve(companyInfoResponseGood));
  const screenRender = render(
    <TestGlobalProviders apiClient={apiClientMock}>
      <CompanyInfoScreen />
    </TestGlobalProviders>,
  );
  await waitFor(() => {
    screenRender.getByText('Elon Musk');
    screenRender.getByText('52000000000');
    screenRender.getByText('2002');
    screenRender.getByText('SpaceX designs');
  });
  jest.clearAllMocks();
});

it('Given bad response When open screen Then render screen without exception', async () => {
  jest
    .spyOn(apiClientMock, 'fetchJson')
    .mockImplementation(request => Promise.resolve(companyInfoResponseBad));
  const screenRender = render(
    <TestGlobalProviders apiClient={apiClientMock}>
      <CompanyInfoScreen />
    </TestGlobalProviders>,
  );
  await waitFor(() => {
    screenRender.getByText('Founder');
  });
  jest.clearAllMocks();
});
