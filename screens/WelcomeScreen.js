import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

class WelcomeScreen extends Component {

    static navigationOptions = {
        header: 'none'
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Log in" onPress={() => this.props.navigation.navigate('LoginScreen')} />
                <Button title="Sign Up" onPress={() => this.props.navigation.navigate('SignUpScreen')} />
            </View>
        );
    }
}
export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});