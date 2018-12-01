import React, { Component } from 'react';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter as Router } from "react-router-dom";

import './App.scss';

class App extends Component {
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

export default App;
