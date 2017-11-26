export function updateCheckout(cart) {
    return {
        type: 'UPDATE_CHECKOUT',
        payload: cart
    }
}