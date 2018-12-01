import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import App from './App';
import Contact from './components/contact/contact';
import Products from './components/products/products';
import Categories from './components/categories/categories';
import { BrowserRouter as Router, Route } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router>
    <span>
        <Route path="/contacto/" component={Contact} />
        <Route path="/la-empresa/" component={Contact} />
        <Route path={`/categoria/:categoryId`} component={Categories} exact />
        <Route path={`/categoria/:categoryId/producto/:productId`} component={Products} exact/>
        <Route path="/" component={App} exact/>
        <Route component={App} />}
    </span>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
