import React, { Component, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

function LoadingContainer(props): Component {
    const [isLoaded, loaded] = useState(false)
    useEffect(() => {
        const _loaded = loaded;
        setTimeout(() => _loaded(true), 2000);
    }, [])

    let currentView;
    if (!isLoaded) {
        currentView = (
            <View>
                <Text>Loading data</Text>
            </View>
        )
    } else {
        currentView = (
            <View>{props.children}</View>
        )
    }
    return (
        <View>
            {currentView}
        </View>
    )
}

export default LoadingContainer