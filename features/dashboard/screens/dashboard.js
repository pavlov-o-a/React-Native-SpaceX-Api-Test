import React, {Component} from 'react';
import {SafeAreaView, View} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import Header from '../components/header';
import MenuItem from '../components/menu-item';

function DasboardScreen(props): Component {
  const {navigation} = props;

  const companyInfoClicked = function () {
    return () => navigation.navigate('CompanyInfo');
  };

  const launchesClicked = function () {
    return () => console.log('launches info clicked');
  };

  return (
    <SafeAreaView>
      <View style={CommonStyles.Column}>
        <Header />
        <MenuItem title="Company info" click={companyInfoClicked(navigation)} />
        <MenuItem title="Launches" click={launchesClicked()} />
      </View>
    </SafeAreaView>
  );
}

export default DasboardScreen;
