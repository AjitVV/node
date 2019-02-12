import * as actionTypes from '../action-types/action-types';

const NavbarAction = () => ({
    changeMenu: (menuItem) => {
        console.log("Inside NavbarAction - changeMenu", menuItem);
        return {
            type: actionTypes.CHANGE_MENU,
            menu: menuItem
        }
    }
})

export default NavbarAction();