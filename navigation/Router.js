// In App.js in a new project

import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
import {Colors} from "../styles/Global";

const Rooter = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            title: null,
            elevation: 0,
            headerTintColor: Colors.secondary,
            headerStyle: {
                backgroundColor: Colors.primary,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomColor: "transparent"
            },
            headerTitleStyle: {
                fontWeight: undefined,
                fontFamily: 'Roboto-Light',
            }
        },
    },
}, {
    initialRouteName: 'Home',
    mode: 'card',
});

export default createAppContainer(Rooter);