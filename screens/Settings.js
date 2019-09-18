import React from 'react';
import {
    View,
    Text,
} from 'react-native';
import {Colors, Fonts, Global} from "../styles/Global";
import i18n from './../utils/i18n';

export default class Settings extends React.Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    };

    /******************** Component callback ********************/

    componentDidMount() {
        console.log("componentDidMount");
    }
    componentWillMount() {
        console.log("componentWillMount");
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    /******************** Render func ********************/

    render() {
        return (
            <View style={Global.container}>
                <Text style={[{color: Colors.secondary}, Fonts.light]}>{i18n.t('settings')}</Text>
            </View>
        );
    }
};