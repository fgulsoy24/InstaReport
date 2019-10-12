import React, { Component } from 'react';
import {View,Text,TextInput,Button} from "react-native";
import LoginStore from "../store/LoginStore"
import LoginActions from "../actions/LoginActions"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' }
        this.onChange = this.onChange.bind(this);
    };
    componentWillMount() {
        LoginStore.addChangeListener(this.onChange);
      }
    
      componentWillUnmount() {
        LoginStore.removeChangeListener(this.onChange);
      }
    onChange() {
        this.setState()
      };
    handleEmailChange(email) {
        let params = Object.assign({}, LoginStore.getLoginParams());
        params.email = email;
        LoginActions.setLoginParams(params);
        this.setState({email:email});
    }


    handlePasswordChange(password) {
        let params = Object.assign({}, LoginStore.getLoginParams());
        params.password = password;
        LoginActions.setLoginParams(params);
        this.setState({password:password});
    }

    handleLoginClick() {
        var params = LoginStore.getLoginParams();
        LoginActions.login(params)
        console.log("login button pressed")
    }



    render() {
        var params = LoginStore.getLoginParams();
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
                <Button title="Giriş" onPress={this.handleLoginClick.bind(this)} >
                   
                </Button>

            </View>
        );
    }



}
export default Login;