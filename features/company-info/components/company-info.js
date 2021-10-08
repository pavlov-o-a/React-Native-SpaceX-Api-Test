import React, {useContext} from 'react';
import {View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import CommonStyles from '../../../shared/styles/common-styles';
import StyleContext from '../../../shared/providers/style-context';
import ThemeStyle from '../../../shared/entities/theme-stlye';

export default function CompanyInfo(props) {
  const baseStyle = useContext(StyleContext);
  return (
    <View style={[CommonStyles.Column, CommonStyles.Expanded]}>
      <ScrollView>
        <Image
          style={Styles(baseStyle).Image}
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
  const baseStyle = useContext(StyleContext);
  return (
    <View style={[CommonStyles.Column, Styles(baseStyle).Entry]}>
      <Text style={Styles(baseStyle).EntryTitle}>{props.title}</Text>
      <Text style={Styles(baseStyle).EntryText}>{props.text}</Text>
    </View>
  );
}

const Styles = (baseStyle: ThemeStyle) =>
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
      fontSize: baseStyle.fontSizeLarge,
      color: baseStyle.fontSecondaryColor,
      alignSelf: 'center',
      marginBottom: 10,
    },
    EntryText: {
      fontSize: baseStyle.fontSizeLarge,
      color: baseStyle.fontPrimaryColor,
      alignSelf: 'center',
    },
  });
