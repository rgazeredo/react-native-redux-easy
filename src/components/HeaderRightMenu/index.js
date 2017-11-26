import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class HeaderRightMenu extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{ paddingRight: 10 }}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('DrawerOpen'); } }>
                    <Icon name="md-menu"/>
                </TouchableOpacity>
            </View>
        );
    }
};
