import React from 'react';
import Header from '../../components/header/header';
import Landing from '../../containers/landing/landing';
import Contact from '../../containers/contact/contact';
import About from '../../containers/about/about';
import Categories from '../../containers/categories/categories';
import Product from '../../containers/product/product';
import { Route, Switch } from "react-router-dom";

export default class Main extends React.Component {
    render() {
        return <div id="main">
            <div className="inner">
                <Header></Header>
                <Switch>
                    <Route path="/contacto/" component={Contact} />
                    <Route path="/la-empresa/" component={About} />
                    <Route path={`/categoria/:categoryId`} component={Categories} exact />
                    <Route path={`/categoria/:categoryId/producto/:productId`} component={Product} exact/>
                    <Route path="/" component={Landing} exact/>
                    <Route component={Landing}/>
                </Switch>
            </div>
        </div>;
    }
}