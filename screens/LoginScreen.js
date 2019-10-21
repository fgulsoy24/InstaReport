import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    ImageBackground,
    View,
} from 'react-native';
import Login from '../components/Login'

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <ImageBackground source={"../assets/images/istanbul.jpg"} style={{ width: '100%', height: '100%' }}>
                <Login style={styles.container} />
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})