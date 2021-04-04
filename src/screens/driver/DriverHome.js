import React from 'react';
import { StyleSheet, Text, View, Button, AsyncStorage, Image, YellowBox } from 'react-native';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import {createStackNavigator} from 'react-navigation-stack'
import DriverHomeContents from './DriverHomeContents';
import DriverVehicle from './DriverVehicle';
import DriverEarnings from './DriverEarnings';
import DriverRatings from './DriverRatings';
import DriverSettings from './DriverSettings';
import DriverLicence from './DriverLicence';

import DriverLogout from './DriverLogout';
// import RiderDriverScreenChoice from '../main/RiderDriverScreenChoice';
import { Content, Container, Header, Left, Icon, Footer, Body } from 'native-base';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
// import * as firebase from 'firebase';
// import ApiKeys from '../constants/ApiKeys';

class DriverHome extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.setState = {
			userId: ''
		};

		// if (!firebase.apps.length) {
		// 	firebase.initializeApp(ApiKeys.FirebaseConfig);
		// }
	}
	componentDidMount() {
		//AsyncStorage.clear();

		// AsyncStorage.getItem('driverId')
		// 	.then((result) =>
		// 		firebase
		// 			.database()
		// 			.ref('/Drivers/' + result + '/Details')
		// 			.once('value')
		// 			.then(function(snapshot) {
		// 				firstname = snapshot.child('firstname').val();
		// 				lastname = snapshot.child('lastname').val();
		// 			})
		// 			.then(
		// 				() => {
		// 					// console.log("fine"+result);
		// 				},
		// 				(error) => {
		// 					console.error('error' + error);
		// 					console.log('the user id:' + userId);
		// 				}
		// 			)
		// 	)
		// 	.catch((e) => console.log('err', e));

		YellowBox.ignoreWarnings([ 'Encountered an error loading page' ]);
		console.disableYellowBox = true;
	}
	render() {
		return (
			<View style={styles.container}>
				<MyDrawerNav />
			</View>
		);
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.navigation.navigate('Auth');
	};
}
//
export const MyBottomTabNavigator = createMaterialBottomTabNavigator(
	{
		Home: { screen: DriverHomeContents, navigationOptions:{  
			tabBarLabel:'Home',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/home.png')}></Image> 
				</View>),  
		}},
		Vehicle: { screen: DriverVehicle, navigationOptions:{  
			tabBarLabel:'Vehicle',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/vehicle.png')}></Image> 
				</View>),  
		}},
		Settings: { screen: DriverSettings, navigationOptions:{  
			tabBarLabel:'Settings',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/settings.png')}></Image> 
				</View>),  
		}},
		Ratings: { screen: DriverRatings, navigationOptions:{  
			tabBarLabel:'Ratings',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/ratings.png')}></Image> 
				</View>),  
		}},
		Earnings: { screen: DriverEarnings, navigationOptions:{  
			tabBarLabel:'Earnings',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/earnings.png')}></Image> 
				</View>),  
		}},
		Licence: { screen: DriverLicence, navigationOptions:{  
			tabBarLabel:'Licence',  
			tabBarIcon: ({ tintColor }) => (  
				<View>  
					<Image style={{width: 25, height:25}} source={require('../Images/licence.png')}></Image> 
				</View>),  
		}}
		// Logout:RiderDriverScreenChoice
	},
	{
		initialRouteName: 'Home',
		activeTintColor: '#42A5F5',
		inactiveTintColor: '#ffffff',
		barStyle: { backgroundColor: '#fff' }
	}
);

const customDrawerContentComponent = (props) => (
	<Container>
		<Header style={{ height: 200, backgroundColor: '#42A5F5' }}>
			<Body style={{ alignItems: 'center', justifyContent: 'center' }}>
				<Image source={require('../Images/avatar.png')} style={{ width: 100, height: 100, borderRadius: 100 }} />
				<Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 20 }}>
					Alexis Pedro
				</Text>
			</Body>
		</Header>
		<Content>
			<DrawerItems {...props} />
		</Content>
	</Container>
);
//drawerNavigator
const MyDrawerNav = createDrawerNavigator(
	{
		Home: MyBottomTabNavigator,
		Earnings: DriverEarnings,
		Settings: DriverSettings,
		Ratings: DriverRatings,
		Vehicle: DriverVehicle,
		Licence: DriverLicence,
		Logout: DriverLogout
		//Logout:RiderDriverScreenChoice
	},
	{
		initialRouteName: 'Home',
		contentComponent: customDrawerContentComponent,
		drawerOpenRoute: 'DrawerOpen',
		drawerCloseRoute: 'DrawerClose',
		drawerToggleRoute: 'DrawerToggle'
	}
);
const AppContainer = createAppContainer(MyDrawerNav);
export default AppContainer;
//

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#42A5F5',
		justifyContent: 'center'
	}
});
