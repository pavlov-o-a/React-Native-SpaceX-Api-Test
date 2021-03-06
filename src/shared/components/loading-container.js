import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import CommonStyles from '../styles/common-styles';

const LoadingContainer = props => {
  let currentView;
  if (props.isLoading) {
    currentView = (
      <View style={[CommonStyles.Center, CommonStyles.Expanded, props.style]}>
        <ActivityIndicator size="large" accessibilityLabel="Loading" />
      </View>
    );
  } else {
    currentView = <View>{props.children}</View>;
  }
  return <View>{currentView}</View>;
};

export default LoadingContainer;
