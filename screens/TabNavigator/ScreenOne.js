import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class ScreenOne extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button title="Log out" onPress={() => this.props.screenProps.navigation.navigate('WelcomeScreen')} />
            </View>
        );
    }
}
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});