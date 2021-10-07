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

function DasboardScreen(props): Component {
    const { navigation } = props

    const companyInfoClicked = function(navigation) {
        return () => navigation.navigate('CompanyInfo')
    }

    const launchesClicked = function() {
        return () => console.log('launches info clicked')
    }
    
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'column' }}>
                <Header />
                <MenuItem title='Company info' click={companyInfoClicked(navigation)} />
                <MenuItem title='Launches' click={launchesClicked()} />
            </View>
        </SafeAreaView>
    )
}

export default DasboardScreen