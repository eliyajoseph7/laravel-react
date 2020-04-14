import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';


export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Menu />
                <Footer />
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
