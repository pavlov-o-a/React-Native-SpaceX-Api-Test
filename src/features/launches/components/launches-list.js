import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/providers/style-context';
import ThemeStyle from '../../../shared/entities/theme-stlye';

const LaunchesList = props => {
  return (
    <FlatList
      data={props.launches}
      renderItem={({item}) => (
        <LaunchItem name={item.name} date={item.date} details={item.details} />
      )}
    />
  );
};

const LaunchItem = props => {
  const baseStyle = useContext(StyleContext).theme;
  return (
    <View style={[CommonStyles.Column, Styles(baseStyle).Item]}>
      <View style={CommonStyles.Row}>
        <Text style={Styles(baseStyle).Label}>{'Name: '}</Text>
        <Text style={Styles(baseStyle).Text}>{props.name}</Text>
      </View>
      <View style={CommonStyles.Row}>
        <Text style={Styles(baseStyle).Label}>{'Date: '}</Text>
        <Text style={Styles(baseStyle).Text}>{props.date}</Text>
      </View>
      <Text style={Styles(baseStyle).Label}>{'Details: '}</Text>
      <Text style={Styles(baseStyle).Text}>{props.details}</Text>
      <Text />
    </View>
  );
};

const Styles = (baseStyle: ThemeStyle) =>
  StyleSheet.create({
    Item: {
      marginStart: 20,
      marginEnd: 20,
      marginBottom: 10,
      marginTop: 10,
    },
    Label: {
      fontSize: baseStyle.fontSizeMedium,
      color: baseStyle.fontSecondaryColor,
    },
    Text: {
      fontSize: baseStyle.fontSizeMedium,
      color: baseStyle.fontPrimaryColor,
    },
  });

export default LaunchesList;
