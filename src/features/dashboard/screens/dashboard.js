import React, {Component, useContext} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import ThemeStyle from '../../../shared/entities/theme-stlye';
import StyleContext from '../../../shared/providers/style-context';
import CommonStyles from '../../../shared/styles/common-styles';
import Header from '../components/header';
import MenuItem from '../components/menu-item';
import {DayTheme, NightTheme} from '../../../shared/constants';

const DasboardScreen = props => {
  const {navigation} = props;

  const companyInfoClicked = () => () => navigation.navigate('CompanyInfo');

  const launchesClicked = () => () => navigation.navigate('Launches');

  const providedStyle = useContext(StyleContext);

  function changeThemeClicked() {
    if (providedStyle.theme === DayTheme) {
      providedStyle.callback(NightTheme);
    } else {
      providedStyle.callback(DayTheme);
    }
  }

  return (
    <SafeAreaView>
      <View
        style={[
          CommonStyles.Column,
          CommonStyles.Expanded,
          {backgroundColor: providedStyle.theme.background},
        ]}>
        <Header />
        <MenuItem title="Company info" click={companyInfoClicked(navigation)} />
        <MenuItem title="Launches" click={launchesClicked()} />
        <MenuItem title={'switch theme'} click={changeThemeClicked} />
      </View>
    </SafeAreaView>
  );
};

export default DasboardScreen;
