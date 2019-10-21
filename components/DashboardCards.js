import React from 'react';
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import { Card, CardItem, Body } from "native-base";
import { Ionicons } from 'react-native-vector-icons'
import { material, systemWeights, iOSColors } from 'react-native-typography'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';



const styles = StyleSheet.create({
    bold: {
        ...systemWeights.bold,
        color: iOSColors.lightGray
    },
    styleView: {
        position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row',
        padding: 20,
        paddingBottom: 60
    },
    styleCardItem: {
        flex: 1, backgroundColor: iOSColors.black, borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    styleIcon:{
        color: iOSColors.green, 
        fontSize: 24, 
        paddingLeft: 5, 
        paddingRight: 5 
    }
});
export default class DashboardCards extends React.Component { 
    constructor(props) {
        super(props);
      };
      

NavigateActivity()  
{
   
    NavigationActions.navigate('Login');
}

    render() { 
    return (
    
        <Card style={{ flex: 1, backgroundColor: iOSColors.black, height: 100, borderColor: iOSColors.blue, borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30 }}>
            <CardItem cardBody button style={styles.styleCardItem}
           onPress={this.NavigateActivity} >
                <View style={styles.styleView}>
                    <Text style={{ color: iOSColors.blue, fontSize: 18 }} >{this.props.mainCount}</Text>
                    <Ionicons name={this.props.arrowDirection} style={styles.styleIcon} />
                    <Text style={{ color: iOSColors.green, fontSize: 15 }} >{this.props.countChange}</Text>
                </View>
                <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row', paddingLeft: 20 }}>

                    <Text style={material.captionWhite} >{this.props.cardText}</Text>
                </View>
            </CardItem>
        </Card>

    );
}}
