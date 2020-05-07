import React, { Component } from 'react'
import axios from 'axios';
import Products from './dashboardComponents/Products';
import ProductSalesChart from './charts/ProductSalesChart';

export default class Dashboard extends Component {

    constructor(){
        super()
        this.state = {
            salesData: {}
        }
    }

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
    componentWillMount(){
        this.getSalesData();
    }

    getSalesData(){
        // Ajax request here
        this.setState({
            salesData: {
                labels: ['software', 'hardware', 'autoparts', 'electronics', 'agriculture'],
                datasets: [
                    {
                        label: 'Product Sales',
                        data: [
                            '72847',
                            '7883',
                            '72847',
                            '7532',
                            '72647',
                        ],
                        backgroundColor: ['green', 'yellow', 'gold', 'violet', 'pink']
                    },
                ]
            }
        })
    }
    

    render() {
        return (
            <div className="content-wrapper">
                <ProductSalesChart salesData={this.state.salesData} legendPosition="bottom"/>
                <Products />
            </div>

        )
    }
}
