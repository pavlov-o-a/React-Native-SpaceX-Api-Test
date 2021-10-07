import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/styles/style-context';

export default function LaunchesList(props) {
  return (
    <FlatList
      data={props.launches}
      renderItem={({item}) => (
        <LaunchItem name={item.name} date={item.date} details={item.details} />
      )}
    />
  );
}

function LaunchItem(props) {
  const DefaultStyles = useContext(StyleContext);
  return (
    <View style={[CommonStyles.Column, Styles(DefaultStyles).Item]}>
      <View style={CommonStyles.Row}>
        <Text style={Styles(DefaultStyles).Label}>{'Name: '}</Text>
        <Text style={Styles(DefaultStyles).Text}>{props.name}</Text>
      </View>
      <View style={CommonStyles.Row}>
        <Text style={Styles(DefaultStyles).Label}>{'Date: '}</Text>
        <Text style={Styles(DefaultStyles).Text}>{props.date}</Text>
      </View>
      <Text style={Styles(DefaultStyles).Label}>{'Details: '}</Text>
      <Text style={Styles(DefaultStyles).Text}>{props.details}</Text>
      <Text />
    </View>
  );
}

const Styles = DefaultStyles =>
  StyleSheet.create({
    Item: {
      marginStart: 20,
      marginEnd: 20,
      marginBottom: 10,
      marginTop: 10,
    },
    Label: {
      fontSize: DefaultStyles.FONT_SIZE_MEDIUM,
      color: DefaultStyles.FONT_SECONDARY_COLOR,
    },
    Text: {
      fontSize: DefaultStyles.FONT_SIZE_MEDIUM,
      color: DefaultStyles.FONT_PRIMARY_COLOR,
    },
  });
