import React, {useCallback, useContext, useEffect, useReducer} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import ThemeStyle from '../../../shared/entities/theme-stlye';
import ApiClientContext from '../../../shared/providers/api-client-context';
import StyleContext from '../../../shared/providers/style-context';
import {getLaunchesRequest} from '../api/launches-api';
import LunchesMapper from '../api/launches-mapper';
import LaunchesList from '../components/launches-list';

const LaunchesScreen = props => {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, launches: state.launches};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});
  const apiClient = useContext(ApiClientContext);

  const getLaunches = useCallback(() => {
    if (state.isLoading === true) {
      const request = getLaunchesRequest(apiClient.baseUrl);
      apiClient
        .fetchJson(request)
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
  }, [apiClient, state]);

  useEffect(() => {
    getLaunches();
  }, [getLaunches]);

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
};

export default LaunchesScreen;
