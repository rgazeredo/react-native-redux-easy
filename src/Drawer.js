import React from 'react';
import { StackNavigator } from "react-navigation";
import { DrawerNavigator } from "react-navigation";

import { Text } from 'react-native';
import { Button } from 'native-base';

import SideBar from './components/SideBar';
import HeaderRightMenu from './components/HeaderRightMenu';

import Home from './screens/Home';
import Contact from './screens/Contact';

const Router = StackNavigator(
	{
		Home: { 
            screen: Home,
            navigationOptions: ({ navigation }) => ({
                title: "Home",
                headerRight: <HeaderRightMenu navigation={navigation} />,
                headerBackTitle: null
                // title 
                // header 
                // headerTitle 
                // headerTitleAllowFontScaling 
                // headerBackTitle 
                // headerTruncatedBackTitle 
                // headerRight 
                // headerLeft 
                // headerStyle 
                // headerTitleStyle 
                // headerBackTitleStyle 
                // headerTintColor 
                // headerPressColorAndroid 
                // gesturesEnabled 
                // gestureResponseDistance - horizontal | vertical
			})
        },
		Contact: { 
            screen: Contact,
            navigationOptions: ({ navigation }) => ({
                title: "Contact",
                headerRight: <HeaderRightMenu navigation={navigation} />,
                headerBackTitle: null
			})
        }
    },
    {
        mode: "card", // card | modal
        headerMode: "float" // float | screen | none
    }
)

const Drawer = DrawerNavigator(
	{
		Home: { screen: Router }
	},
	{
		initialRouteName: "Home",
		contentOptions: {
			activeTintColor: "#e91e63"
		},
		drawerPosition: "right",
		contentComponent: props => <SideBar {...props} />
	}
);

export default Drawer;