import React, { Component } from 'react';
import Main from './components/main/main';
import Sidebar from './components/sidebar/sidebar';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div id="wrapper" className="App">
        <Main />
        <Sidebar/>
      </div>
    );
  }
}

export default App;
