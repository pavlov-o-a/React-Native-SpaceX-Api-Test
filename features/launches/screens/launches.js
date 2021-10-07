/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useReducer} from 'react';
import {SafeAreaView} from 'react-native';
import {Actions} from '../../../shared/actions';
import LoadingContainer from '../../../shared/components/loading-container';
import Delay from '../../../shared/utils/delay';
import LunchesMapper from '../mappers/launches-mapper';
import LaunchesList from '../components/launches-list';

const LaunchesUrl = 'https://api.spacexdata.com/v5/launches';
export default function LaunchesScreen(props) {
  function updateState(state, action) {
    state.isLoading = action === Actions.LOADING;
    return {isLoading: state.isLoading, launches: state.launches};
  }
  const [state, dispatch] = useReducer(updateState, {isLoading: true});

  useEffect(() => {
    getCompanyInfo();
  }, []);

  function getCompanyInfo() {
    Delay(1000)
      .then(() => fetch(LaunchesUrl))
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
