/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useContext, useEffect, useReducer} from 'react';
import {SafeAreaView} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import BaseRequestContext from '../../../shared/providers/base-request-context';
import Delay from '../../../shared/utils/delay';
import {getCompanyInfoRequest} from '../api/company-info-api';
import CompanyInfo from '../components/company-info';
import CompanyInfoMapper from '../mappers/company-info';

export default function CompanyInfoScreen(): Component {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, data: state.data};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const companyInfoRequest = getCompanyInfoRequest(
    useContext(BaseRequestContext),
  );

  function getCompanyInfo() {
    Delay(1000) // romove in prod version. only for demonstration
      .then(() => fetch(companyInfoRequest.url, companyInfoRequest.options))
      .then(response => response.json())
      .then(data => {
        state.data = CompanyInfoMapper(data);
        dispatch(Actions.COMPLETE);
      })
      .catch(e => {
        state.error = e;
        dispatch(Actions.ERROR);
      });
  }

  return (
    <SafeAreaView>
      <LoadingContainer isLoading={state.isLoading}>
        <CompanyInfo info={state.data} />
      </LoadingContainer>
    </SafeAreaView>
  );
}
