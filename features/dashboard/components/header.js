import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import DefaultStyle from "../../../shared/styles/theme.style"

class Header extends Component {
    render() {
        return (
            <View style={{ flexDirection: "column" }}>
                <Text style={styles.Title}>
                    SpaceX Info
                </Text>
                <Text style={styles.Description}>
                    Test project which uses api provided by https://github.com/r-spacex/SpaceX-API
                </Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 30,
        color: DefaultStyle.FONT_PRIMARY_DAY_COLOR,
        textAlign: "center"
    },
    Description: {
        fontSize: 20,
        color: DefaultStyle.FONT_PRIMARY_DAY_COLOR
    }
})

export default Header