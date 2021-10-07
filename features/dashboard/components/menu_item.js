import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DefaultStyle from '../../../shared/styles/theme.style'

function MenuItem(props): Component {
    const { title, click } = props;
    return (<View style={styles.Container}><Button title={title} onPress={click} /></View>)
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        color: DefaultStyle.FONT_PRIMARY_DAY_COLOR,
    },
    Container: {
        marginBottom: 5,
        marginTop: 5,
        marginStart: 20,
        marginEnd: 20,
    }
})

export default MenuItem