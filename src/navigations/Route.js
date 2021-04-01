import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Welcome from '../screens/login/WelcomeScreen'
import Login from '../screens/login/LoginScreen'
import Signup from '../screens/login/SignupScreen'
import AppContainer from "../navigations/index";

const Routes = () => (
      <Router>
         <Scene key = "root">
            <Scene key = "welcome" component = {Welcome} title = "welcome" initial = {true} />
            <Scene key = "login" component = {Login} title = "login" />
            <Scene key = "signup" component = {Signup} title = "signup" />
            <Scene key = "appcontent" component = {AppContainer} title = "appcontent" />
         </Scene>
      </Router>
)
export default Routes