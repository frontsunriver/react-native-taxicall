import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import History from "../screens/Order/History/History";
import BlockDriver from "../screens/Order/BlockDriver";

class MusicRoute extends React.Component {
    render(){
        return(
            <Text>Order Page</Text>
        )
    }
}

class OrderComponent extends React.Component {
    constructor(props){
        super(props);
        const footer_order = require('../../assets/icons/footer_order.png');
        const footer_history = require('../../assets/icons/footer_history.png');
        const footer_block = require('../../assets/icons/footer_block.png');
        this.state = ({
            index: 0,
            routes: [
                { key: 'order', icon: footer_order, title: 'Order', color: '#d30000'},
                { key: 'history', icon:footer_history, title: 'History', color: '#d30000'},
                { key: 'block', icon: footer_block, title: 'Block', color: '#d30000'},
            ]
        });
        this.setIndex = this.setIndex.bind(this);
    }
    setIndex(index){
        this.setState({
            index: index
        });
    }
    render(){
        const renderScene = ({ route, jumpTo }) => {
            switch (route.key) {
              case 'order':
                return <MusicRoute jumpTo={jumpTo} />;
              case 'history':
                return <History navigation={this.props.navigation} jumpTo={jumpTo} />;
              case 'block':
                return <BlockDriver navigation={this.props.navigation} jumpTo={jumpTo} />;
            }
        }

        // const renderScene = BottomNavigation.SceneMap({
        //     order: MusicRoute,
        //     history: History,
        //     recents: RecentsRoute,
        // });
        return(
            <BottomNavigation 
                style={{backgroundColor: '#fff'}}
                navigationState={ {index: this.state.index, routes: this.state.routes} }
                onIndexChange={this.setIndex}
                renderScene={renderScene}
                sceneAnimationEnabled={true}
                barStyle={{backgroundColor: '#fff'}}
                inactiveColor={'#666'}
                activeColor={'#c21807'}
            />
        )
    }
}

export default OrderComponent;

