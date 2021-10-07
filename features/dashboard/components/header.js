import React, {Component, useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/styles/style-context';

function Header(): Component {
  const DefaultStyle = useContext(StyleContext);
  return (
    <View style={CommonStyles.Column}>
      <Text style={styles(DefaultStyle).Title}>SpaceX Info</Text>
      <Text style={styles(DefaultStyle).Description}>
        Test project which uses api provided by
        https://github.com/r-spacex/SpaceX-API
      </Text>
    </View>
  );
}

const styles = DefaultStyle =>
  StyleSheet.create({
    Title: {
      fontSize: 30,
      color: DefaultStyle.FONT_PRIMARY_COLOR,
      textAlign: 'center',
      marginTop: 20,
    },
    Description: {
      fontSize: DefaultStyle.FONT_SIZE_LARGE,
      color: DefaultStyle.FONT_PRIMARY_COLOR,
      textAlign: 'center',
      margin: 20,
    },
  });

export default Header;
