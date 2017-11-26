export default function checkout(state = {}, action) {
    switch(action.type){
        case 'UPDATE_CHECKOUT':
            return action.payload;
        default:
            return state;
    }
}