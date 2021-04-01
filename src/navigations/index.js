import React from "react";
import AppNavigation from "./AppNavigation";

export default class AppContent extends React.Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return(<AppNavigation/>)
    }
}