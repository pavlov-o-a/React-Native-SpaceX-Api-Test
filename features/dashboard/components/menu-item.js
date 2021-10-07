import React, {Component, useContext} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import StyleContext from '../../../shared/styles/style-context';

function MenuItem(props): Component {
  const DefaultStyle = useContext(StyleContext);
  const {title, click} = props;
  return (
    <View style={styles(DefaultStyle).Container}>
      <Button title={title} onPress={click} />
    </View>
  );
}

const styles = DefaultStyle =>
  StyleSheet.create({
    Title: {
      fontSize: 20,
      color: DefaultStyle.FONT_PRIMARY_COLOR,
    },
    Container: {
      marginBottom: 5,
      marginTop: 5,
      marginStart: 20,
      marginEnd: 20,
    },
  });

export default MenuItem;
