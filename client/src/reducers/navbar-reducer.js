import * as actionTypes from '../action-types/action-types';

var initialState = {
    selectedMenu: 'SHOP'
}

const NavbarReducer = (state = initialState, action) => {
    console.log("Inside Navbar Reducer");
    console.log(action);
    var newState = Object.assign({},initialState);
    switch(action.type){
        case actionTypes.CHANGE_MENU:
            newState.selectedMenu = 'PRODUCTS';
            console.log("Change menu new state");
            console.log(newState);
            return newState;
        default:
            return state;    
    }
}

export default NavbarReducer;