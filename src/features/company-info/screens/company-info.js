/* eslint-disable react-hooks/exhaustive-deps */
import React, {Component, useContext, useEffect, useReducer} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import ApiClientContext from '../../../shared/providers/api-client-context';
import StyleContext from '../../../shared/providers/style-context';
import CommonStyles from '../../../shared/styles/common-styles';
import {getCompanyInfoRequest} from '../api/company-info-api';
import CompanyInfo from '../components/company-info';
import CompanyInfoMapper from '../api/company-info-mapper';

export default function CompanyInfoScreen(): Component {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, data: state.data};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const apiClient = useContext(ApiClientContext);
  const companyInfoRequest = getCompanyInfoRequest(apiClient.baseUrl);

  function getCompanyInfo() {
    apiClient
      .fetchJson(companyInfoRequest)
      .then(data => {
        state.data = CompanyInfoMapper(data);
        dispatch(Actions.COMPLETE);
      })
      .catch(e => {
        state.error = e;
        dispatch(Actions.ERROR);
      });
  }

  const theme = useContext(StyleContext).theme;

  return (
    <SafeAreaView>
      <View style={{backgroundColor: theme.background}}>
        <LoadingContainer
          isLoading={state.isLoading}
          style={[CommonStyles.Expanded, {backgroundColor: theme.background}]}>
          <CompanyInfo info={state.data} />
        </LoadingContainer>
      </View>
    </SafeAreaView>
  );
}
