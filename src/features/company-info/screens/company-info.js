import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import ApiClientContext from '../../../shared/providers/api-client-context';
import StyleContext from '../../../shared/providers/style-context';
import CommonStyles from '../../../shared/styles/common-styles';
import {getCompanyInfoRequest} from '../api/company-info-api';
import CompanyInfo from '../components/company-info';
import CompanyInfoMapper from '../api/company-info-mapper';

const CompanyInfoScreen = () => {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, data: state.data};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});
  const apiClient = useContext(ApiClientContext);

  const getCompanyInfo = useCallback(() => {
    if (state.isLoading) {
      const request = getCompanyInfoRequest(apiClient.baseUrl);
      apiClient
        .fetchJson(request)
        .then(data => {
          state.data = CompanyInfoMapper(data);
          dispatch(Actions.COMPLETE);
        })
        .catch(e => {
          state.error = e;
          dispatch(Actions.ERROR);
        });
    }
  }, [apiClient, state]);

  useEffect(() => {
    getCompanyInfo();
  }, [getCompanyInfo]);

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
};

export default CompanyInfoScreen;
