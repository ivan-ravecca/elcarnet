import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Main from './containers/main/main';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router } from "react-router-dom";
import {bindActionCreators} from 'redux';


import {connect} from 'react-redux';
import * as globalActions from './actions/global-actions';



import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      BULK_DATA: {
          categories: [],
          products: []
        }
    };
  }
  componentDidMount() {
    this.props.actions.pullData();
  }

  render() {
    return (
        <Router>
          <div id="wrapper" className="App">
            <Main />
            <Sidebar/>
          </div>
        </Router>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    BULK_DATA: state.bulkData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // loadBulkData: () => { dispatch(globalActions.loadBulkData()); }
    actions: bindActionCreators(globalActions, dispatch)
  }
}

App.propTypes = {
  actions: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
