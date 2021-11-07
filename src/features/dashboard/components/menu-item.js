import React, {Component, useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import ThemeStyle from '../../../shared/entities/theme-stlye';
import StyleContext from '../../../shared/providers/style-context';

function MenuItem(props): Component {
  const baseStyle = useContext(StyleContext).theme;
  const {title, click} = props;
  return (
    <View style={styles(baseStyle).Container}>
      <Button title={title} onPress={click} />
    </View>
  );
}

const styles = (baseStyle: ThemeStyle) =>
  StyleSheet.create({
    Title: {
      fontSize: 20,
      color: baseStyle.fontPrimaryColor,
    },
    Container: {
      marginBottom: 5,
      marginTop: 5,
      marginStart: 20,
      marginEnd: 20,
    },
  });

export default MenuItem;
