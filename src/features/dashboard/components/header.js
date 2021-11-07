import React, {Component, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/providers/style-context';
import ThemeStyle from '../../../shared/entities/theme-stlye';

function Header(): Component {
  const baseStyle = useContext(StyleContext).theme;
  return (
    <View style={CommonStyles.Column}>
      <Text style={styles(baseStyle).Title}>SpaceX Info</Text>
      <Text style={styles(baseStyle).Description}>
        Test project which uses api provided by
        https://github.com/r-spacex/SpaceX-API
      </Text>
    </View>
  );
}

const styles = (baseStyle: ThemeStyle) =>
  StyleSheet.create({
    Title: {
      fontSize: 30,
      color: baseStyle.fontPrimaryColor,
      textAlign: 'center',
      marginTop: 20,
    },
    Description: {
      fontSize: baseStyle.fontSizeLarge,
      color: baseStyle.fontPrimaryColor,
      textAlign: 'center',
      margin: 20,
    },
  });

export default Header;
