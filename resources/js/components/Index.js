import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../components/pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import News from '../pages/News';
import Contacts from '../pages/Contacts';
import Product from './pages/Product';
import Products from './pages/Products';
import Footer from './Footer';
import ServicesDetails from './pages/ServicesDetails';
import AboutMe from './aboutMe/AboutMe'

export default class Index extends Component {
    render() {
        return (
            <div>
                
                <Router>
                <Navbar />
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route exact path="/news" component={ News } />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route path="/products/:id">
                            <Product/>
                        </Route>
                        <Route path="/products">
                            <Products/>
                        </Route>
                        <Route path="/servicesDetails">
                            <ServicesDetails/>
                        </Route>
                        <Route path="/about-me">
                            <AboutMe />
                        </Route>
                        <Route exact path="*" component={ NotFoundPage } /> 
                    </Switch>
                    <div>
                        <Footer />
                    </div>
                </Router>
                
            </div>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
