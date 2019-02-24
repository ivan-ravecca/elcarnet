import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './configureStore';
import ReactGA from 'react-ga';

import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-1570570-2', {
    debug: false,
    titleCase: false
  });

ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
