import React, { Component } from 'react';
import {View,TextInput,  StyleSheet,Text} from "react-native";
import LoginStore from "../store/LoginStore"
import LoginActions from "../actions/LoginActions"
import { material } from 'react-native-typography'
import { Button } from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }
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
    handleUserNameChange(username) {
        let params = Object.assign({}, LoginStore.getLoginParams());
        params.username = username;
        LoginActions.setLoginParams(params);
        this.setState({username:username});
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
            <View style={styles.container}>
                <View  style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Username"
                    value={this.state.username}
                    onChangeText={this.handleUserNameChange.bind(this)}
                />
                   </View>
                <View style={styles.inputContainer}>
                <TextInput  style={styles.input}
                placeholder="Password"
                    value={this.state.password}
                    onChangeText={this.handlePasswordChange.bind(this)}
                />
                </View>
                
                <Button style ={styles.buttonContainer} title="Login" onPress={this.handleLoginClick.bind(this)} >
                <Text style={material.caption} >Login.</Text>
                </Button>

                <br></br>
                <Text style={material.caption} >Şifrenizi kaydetmiyoruz.</Text>

            </View>
        );
    }



}

const styles =  StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
      },
    input:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
buttonContainer:{
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30
},
inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    borderBottomWidth: 1,
    width:250,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
}
})
export default Login;