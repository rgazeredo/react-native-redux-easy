import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as cartActions from '../../actions/cart';
import * as checkoutActions from '../../actions/checkout';

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                <View>
                    <Button primary
                        onPress={() => this.props.updateCart({ id: Math.random(), name:'Cart '+ Math.random() })}>
                        <Text>ADD CART</Text>
                    </Button>
                    <Button primary
                        onPress={() => this.props.updateCheckout({ id: Math.random(), name:'Checkout '+ Math.random() })}>
                        <Text>ADD CHECKOUT</Text>
                    </Button>
                    <Text>CONTACT</Text>
                    <Text>{ (this.props.cart.name) ? this.props.cart.name : '' }</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => ({ cart: state.cart, checkout: state.checkout });
const mapDispatchToProps = dispatch => bindActionCreators(Object.assign({}, cartActions, checkoutActions), dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Contact);