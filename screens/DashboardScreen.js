import React from 'react';
import { View } from 'native-base';
import DashboardComponent from '../components/Dashboard'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:''}
    };

    render() {
        return (
       <View >
         <DashboardComponent/>

       </View>
        );
    }



}
export default Dashboard;