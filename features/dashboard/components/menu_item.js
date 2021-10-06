import React, { Component } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import DefaultStyle from "../../../shared/styles/theme.style"

class MenuItem extends Component {
    render() {
        const { title, click } = this.props;
        return (<Button title={title} onPress={click} />)
    }
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        color: DefaultStyle.FONT_PRIMARY_DAY_COLOR
    }
})

export default MenuItem