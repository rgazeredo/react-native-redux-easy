export default function cart(state = {}, action) {
    switch(action.type){
        case 'UPDATE_CART':
            return action.payload;
        default:
            return state;
    }
}