/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useReducer} from 'react';
import {SafeAreaView} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import BaseRequestContext from '../../../shared/providers/base-request-context';
import Delay from '../../../shared/utils/delay';
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

  const launchesRequest = getLaunchesRequest(useContext(BaseRequestContext));

  function getCompanyInfo() {
    Delay(1000) // romove in prod version. only for demonstration
      .then(() => fetch(launchesRequest.url, launchesRequest.options))
      .then(response => response.json())
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

  return (
    <SafeAreaView>
      <LoadingContainer isLoading={state.isLoading}>
        <LaunchesList launches={state.launches} />
      </LoadingContainer>
    </SafeAreaView>
  );
}
