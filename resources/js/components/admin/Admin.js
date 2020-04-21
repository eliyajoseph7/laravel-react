import React, { Component } from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Add from './news/Add'
import View from './news/View'


export default class Admin extends Component {
    render() {
        return (
            <div className="adm">
                <div className="content">
                    

                    <Router>
                        <Link className="btn btn-primary" to="/admin">View News</Link>
                        <Link className="btn btn-primary" to="/addNews">Add News</Link>

                        <Route exact path="/admin" component={ View } />
                        <Route exact path="/addNews" component={ Add } />

                        
                    </Router>
                    
                    
                </div>
                
                

            </div>
        )
    }
}
