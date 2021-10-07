import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/styles/style-context';

export default function CompanyInfo(props) {
  console.log(JSON.stringify(props.info));
  const DefaultStyles = useContext(StyleContext);
  return (
    <View style={[CommonStyles.Column, CommonStyles.Expanded]}>
      <ScrollView>
        <Image
          style={Styles(DefaultStyles).Image}
          source={{uri: props.info.imageUrl}}
        />
        <Entry title={'Founder'} text={props.info.founder} />
        <Entry title={'Founded'} text={props.info.founded} />
        <Entry title={'Market cap'} text={props.info.marketcap} />
        <Entry title={'Purpose'} text={props.info.purpose} />
      </ScrollView>
    </View>
  );
}

function Entry(props) {
  const DefaultStyles = useContext(StyleContext);
  return (
    <View style={[CommonStyles.Column, Styles(DefaultStyles).Entry]}>
      <Text style={Styles(DefaultStyles).EntryTitle}>{props.title}</Text>
      <Text style={Styles(DefaultStyles).EntryText}>{props.text}</Text>
    </View>
  );
}

const Styles = DefaultStyles =>
  StyleSheet.create({
    Image: {
      width: 50,
      height: 50,
      alignSelf: 'center',
      margin: 20,
    },
    Entry: {
      marginStart: 20,
      marginEnd: 20,
      marginTop: 10,
      marginBottom: 10,
    },
    EntryTitle: {
      fontSize: DefaultStyles.FONT_SIZE_LARGE,
      color: DefaultStyles.FONT_SECONDARY_COLOR,
      alignSelf: 'center',
      marginBottom: 10,
    },
    EntryText: {
      fontSize: DefaultStyles.FONT_SIZE_LARGE,
      color: DefaultStyles.FONT_PRIMARY_COLOR,
      alignSelf: 'center',
    },
  });
