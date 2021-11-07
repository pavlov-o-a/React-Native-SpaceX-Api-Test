/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useReducer} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import ThemeStyle from '../../../shared/entities/theme-stlye';
import ApiClientContext from '../../../shared/providers/api-client-context';
import StyleContext from '../../../shared/providers/style-context';
import {getLaunchesRequest} from '../api/launches-api';
import LunchesMapper from '../api/launches-mapper';
import LaunchesList from '../components/launches-list';

export default function LaunchesScreen(props) {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, launches: state.launches};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});

  useEffect(() => {
    getCompanyInfo();
  }, []);

  const apiClient = useContext(ApiClientContext);
  const launchesRequest = getLaunchesRequest(apiClient.baseUrl);

  function getCompanyInfo() {
    apiClient
      .fetchJson(launchesRequest)
      .then(data => {
        state.launches = LunchesMapper(data);
        dispatch(Actions.COMPLETE);
      })
      .catch(e => {
        state.error = e;
        dispatch(Actions.ERROR);
        console.log(e);
      });
  }

  const theme: ThemeStyle = useContext(StyleContext).theme;

  return (
    <SafeAreaView>
      <View style={{backgroundColor: theme.background}}>
        <LoadingContainer isLoading={state.isLoading}>
          <LaunchesList launches={state.launches} />
        </LoadingContainer>
      </View>
    </SafeAreaView>
  );
}
