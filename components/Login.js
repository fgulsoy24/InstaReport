import React, { Component } from 'react';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import {View,Text} from "react-native";
import LoginStore from "../store/LoginStore"
import LoginActions from "../actions/LoginActions"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
    };

    handleEmailChange(email) {
        var params = LoginStore.getLoginParams();
        params.email = email;
        LoginActions.setLoginParams(params);
        this.setState({ email: email });
    }


    handlePasswordChange(password) {
        this.setState({ password: password });
    }
    handleLoginClick() {
        console.log("login button pressed")
    }



    render() {
        var params = LoginStore.getLoginParams();
        return (
            <View>
                <TextInput
                    value={params.email}
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