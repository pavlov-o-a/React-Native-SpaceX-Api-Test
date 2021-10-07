import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import LoadingContainer from '../../../shared/components/loading-container';

function CompanyInfoScreen(): Component {
  return (
    <SafeAreaView>
      <LoadingContainer>
        <Text>Company info screen</Text>
      </LoadingContainer>
    </SafeAreaView>
  );
}

export default CompanyInfoScreen;
