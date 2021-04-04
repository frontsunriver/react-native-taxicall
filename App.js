import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import RiderDriverScreenChoice from "./src/screens/ChoseRiderDriver/RiderDriverScreenChoice";

import AuthLoadingScreen from "./src/screens/AuthLoading/AuthLoadingScreen";
import RiderRegLog from './src/screens/rider/RiderRegLog';
import RiderRegister from './src/screens/rider/RiderRegister';
import RiderLogin from './src/screens/rider/RiderLogin';
import RiderHome from './src/screens/rider/RiderHome';
// import RiderVerifyNumber from './src/screens/rider/RiderVerifyNumber';
// import RiderForgotPassword from './src/screens/rider/RiderForgotPassword'
import DriverRegLog from "./src/screens/driver/DriverRegLog";
import DriverLogin from "./src/screens/driver/DriverLogin";
import DriverRegister from "./src/screens/driver/DriverRegister";
import DriverHome from './src/screens/driver/DriverHome';

class App extends React.Component {
  render(){
    return (
        <View style={styles.container} />
    );
  }
}

const AuthStack = createStackNavigator({
	Home: RiderDriverScreenChoice,
	//rider
	RiderScreen: RiderRegLog,
	RiderReg: RiderRegister,
	RiderLog: RiderLogin,
	// RiderVerifyNum: RiderVerifyNumber,
	// RiderResetPassWord: RiderForgotPassword,
	// //driver
	DriverScreen: DriverRegLog,
	DriverLog: DriverLogin,
	DriverReg: DriverRegister
});

const AuthStackRider = createStackNavigator({ Rider: RiderHome }, {
    headerMode: 'none',
    navigationOptions: {
      header: null,
      headerVisible: false,
    },
  },);
const AuthStackDriver = createStackNavigator({ Driver: DriverHome }, { 
	headerMode: 'none',
	navigationOptions: {
	header: null,
	headerVisible: false,
	},});
const switchNavigator = createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App1: AuthStackRider,
		App2: AuthStackDriver,
		Auth: AuthStack
	},
	{
		initialRouteName: 'AuthLoading'
	}
);

const AppContainer = createAppContainer(switchNavigator);
export default AppContainer;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1E88E5'
	}
});