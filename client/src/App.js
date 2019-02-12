import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import Navbar from './navbar/navbar';
import PageBody from './page-body/page-body';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PageBody />
      </div>
    );
  }
}

export default connect() (App);
