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
import { NavigationContainer } from '@react-navigation/native';
import Header from '../components/header';
import MenuItem from '../components/menu_item';

class DasboardScreen extends Component {
    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView>
                <View style={{ flexDirection: 'column' }}>
                    <Header />
                    <MenuItem title='Company info' click={this.companyInfoClicked(navigation)} />
                    <MenuItem title='Launches' click={this.launchesClicked()} />
                </View>
            </SafeAreaView>
        )
    }

    companyInfoClicked(navigation) {
        return () => navigation.navigate('CompanyInfo')
    }

    launchesClicked() {
        return () => console.log('launches info clicked')
    }
}

export default DasboardScreen