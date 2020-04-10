import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import News from '../pages/News';
import Contacts from '../pages/Contacts';

export default class Index extends Component {
    render() {
        return (
            <div>
                
                <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route exact path="/news" component={ News } />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="*" component={ NotFoundPage } /> 
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
