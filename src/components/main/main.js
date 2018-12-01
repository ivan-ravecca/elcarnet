import React from 'react';
import Header from '../header/header';
import Landing from '../landing/landing';


export default class Main extends React.Component {
    render() {
        return <div id="main">
            <div className="inner">
                <Header></Header>
                <Landing></Landing>
            </div>
        </div>;
    }
}