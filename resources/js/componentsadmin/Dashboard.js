import React, { Component } from 'react'
import axios from 'axios';
import Products from './dashboardComponents/Products';

export default class Dashboard extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         news: []
    //     }
    // }

    // componentDidMount() {
    //     const script = document.createElement('script');

    //     script.src = 'js/dataTable.js';
    //     script.async = true;

    //     document.body.appendChild(script);


    //   const url = `http://127.0.0.1:8000/api/get-news`
    //     axios.get(url)
    //         .then(response=>{
    //             this.setState({news:response.data.data})
    //         });
        
    // }

    

    render() {
        return (
            <div className="content-wrapper">
                <Products />
            </div>

        )
    }
}
