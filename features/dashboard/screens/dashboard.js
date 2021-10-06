import React, { Component } from 'react';
import type { Node } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import Header from '../components/header';
import MenuItem from '../components/menu_item';

class DasboardScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <View style={{ flexDirection: "column" }}>
                    <Header />
                    <MenuItem title="Company info" click={this.companyInfoClicked()} />
                    <MenuItem title="Launches" click={this.launchesClicked()} />
                </View>
            </SafeAreaView>
        )
    }

    companyInfoClicked() {
        console.log("company info clicked")
    }

    launchesClicked() {
        console.log("launches info clicked")
    }
}

export default DasboardScreen