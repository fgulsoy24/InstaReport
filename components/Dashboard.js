import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, Image } from "react-native";
import Grid from '@material-ui/core/Grid';
import { Header, Card, CardItem, Body } from "native-base";
import { Ionicons } from 'react-native-vector-icons'
import { material, systemWeights, iOSColors } from 'react-native-typography'
import DashboardCards from './DashboardCards';

class DashboardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' }
  };
  NavigateActivity()  
  {
     
      NavigationActions.navigate('Home');
  }

  render() {
    return (
      <View style={{backgroundColor:iOSColors.customGray}}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Card style={{ flex: 1, backgroundColor: iOSColors.black, height: 100,borderColor:iOSColors.blue, borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  borderTopRightRadius: 30,
  borderTopLeftRadius: 30, }}>
              <CardItem cardBody button style={{ flex: 1, backgroundColor: iOSColors.black,borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  borderTopRightRadius: 10,
  borderTopLeftRadius: 10 }} onPress={() => alert("This is Card Header")} >
                <View style={styles.styleView}>
                  <Text style={{color:iOSColors.blue,fontSize:18}} >208</Text>
                  <Ionicons name='ios-arrow-dropup' style={{ color: iOSColors.green, fontSize: 24,paddingLeft:5,paddingRight:5 }} />
                  <Text style={{color:iOSColors.green,fontSize:15}} >1</Text>
                </View>
                <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row',paddingLeft:20 }}>

                  <Text style={material.captionWhite} >Kişi Sizi Takip Ediyor</Text>
                </View>
              </CardItem>
            </Card>
          </Grid>
          <Grid item xs={6}>
          <DashboardCards props = {this.props} cardText="Takipçiniz Var" countChange="5" mainCount = "250" arrowDirection = "ios-arrow-dropup" />
          </Grid>
        </Grid>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  bold: {
    ...systemWeights.bold,
    color: iOSColors.lightGray
  },
  styleView: {
    position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, flexDirection: 'row',
    padding: 20,
    paddingBottom: 60
  }
});
export default DashboardComponent;
