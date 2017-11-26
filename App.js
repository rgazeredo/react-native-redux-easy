import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Root } from 'native-base';
import { Provider } from 'react-redux';

import Store from './src/Store';
import Drawer from './src/Drawer';
import Home from './src/screens/Home';

Drawer.navigationOptions = ({ navigation }) => ({
	header: null
})

const AppNavigator = StackNavigator(
	{
		Home: { screen: Home },
		Drawer: { screen: ({ navigation }) => <Drawer screenProps={{ rootNavigation: navigation }} /> }
	},
	{
		index: 0,
		initialRouteName: "Drawer",
		headerMode: "none"
	}
)

export default class App extends React.Component {
	render() {
		return (
			<Provider store={Store}>
				<Root>
					<AppNavigator />
				</Root>
			</Provider>
		);
	}
}
