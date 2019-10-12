import React, { Component } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {View,Text} from "react-native";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    };

    handleEmailChange(email) {
        this.setState({ email: email });
    }


    handlePasswordChange(password) {
        this.setState({ password: password });
    }
    handleLoginClick() {
        console.log("login button pressed")
    }



    render() {
        return (
            <View>
                <TextInput
                    value={this.state.email}
                    onChangeText={this.handleEmailChange.bind(this)}
                />
                <TextInput
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange.bind(this)}
                />
                <TouchableOpacity onPress={this.handleLoginClick()}>
                    <Text>Giriş</Text>
                </TouchableOpacity>

            </View>
        );
    }



}
export default Login;