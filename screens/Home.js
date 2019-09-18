import React from 'react';
import {
    View,
    Text,
    Button,
    ScrollView,
    SafeAreaView,
} from 'react-native';
import {Colors, Fonts, Global} from "../styles/Global";

export default class Home extends React.Component {

    constructor (props) {
        super(props);

        this.state = {

        };
    };

    goToSettings = () => {
        this.props.navigation.navigate('Settings');
    };

    /******************** Component callback ********************/

    componentDidMount() {
        console.log("@@ componentDidMount home");
    }
    componentWillMount() {
        console.log("@@ componentWillMount home");
    }
    componentWillUnmount() {
        console.log("@@ componentWillUnmount home");
    }

    /******************** Render func ********************/

    render() {
        return (
            <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={Global.contentContainerStyle} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} overScrollMode={'never'} bounces={false} automaticallyAdjustContentInsets={false}>
                <SafeAreaView style={Global.container}>

                <Text style={[{color: Colors.secondary}, Fonts.light]}>Home</Text>

                <Button
                    title="Go to Settings"
                    onPress={this.goToSettings}
                />
                </SafeAreaView>
            </ScrollView>
            </View>
        );
    }
};

