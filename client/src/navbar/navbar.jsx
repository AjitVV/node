import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import navbarAction from '../actions/navbar-action';

class Navbar extends Component{
    
    componentDidMount(prevProps, prevState){

    }

    handleItemChange = (e, {name}) => {
        this.props.navbarAction.changeMenu(name);
    }
    render(){
        const activeItem = this.props.selectedMenu;
        console.log("Inside render method");
        console.log(this.props);
        return(
            <div>
                <Menu pointing>
                    <Menu.Item 
                        name='SHOP'
                        active={activeItem === 'SHOP'}
                        onClick={this.handleItemChange}
                    />
                    <Menu.Item 
                        name='PRODUCTS'
                        active={activeItem==='PRODUCTS'}
                        onClick={this.handleItemChange}
                    />
                </Menu>
            </div>
        )
    }
}

const mapSateToProp = state => {
    console.log(state);
    return {
        selectedMenu: state.NavbarReducer.selectedMenu
    }
}

const mapDispatchToProps = dispatch => {
    return{
        navbarAction: bindActionCreators(navbarAction,dispatch)
    }
}

export default connect(mapSateToProp,mapDispatchToProps)(Navbar);