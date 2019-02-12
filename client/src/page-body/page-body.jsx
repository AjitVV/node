import React,{Component} from 'react';
import {Segment} from 'semantic-ui-react';

export default class PageBody extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <Segment raised>
                Test
            </Segment>
        )
    }
}