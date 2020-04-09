import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navbar from './Navbar';
import Home from '../pages/Home'
import NotFoundPage from '../pages/NotFoundPage'
import News from '../pages/News'
import Contacts from '../pages/Contacts'

export default class Index extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Router>
                    <Navbar />
                
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/news" component={News} />
                        <Route path="/contacts" component={Contacts} />
                        <Route component={ NotFoundPage } /> 
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
