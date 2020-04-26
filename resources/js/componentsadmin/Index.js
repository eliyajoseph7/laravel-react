import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './layouts/Header';
import Menu from './layouts/Menu';
import Footer from './layouts/Footer';
import Dashboard from './Dashboard';
import UpdateProduct from './dashboardComponents/UpdateProduct';
import AddProduct from './dashboardComponents/AddProduct';


export default class Index extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Menu />
                    
                    <Route exact path='/admin'><Dashboard /></Route> 
                    <Route exact path='/admin/edit-product/:id'>
                        <UpdateProduct />
                    </Route> 
                    <Route exact path="/admin/add-product">
                        <AddProduct />
                    </Route> 
                    <Route exact path="/products/:id">
                        <Dashboard />
                    </Route> 
                    <Footer />
                </Router>
                
            </div>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<Index />, document.getElementById('root'));
}
