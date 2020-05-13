import React, { Component } from 'react'
// import axios from 'axios';
import Products from './dashboardComponents/Products';
import ProductSalesChart from './charts/ProductSalesChart';

export default class Dashboard extends Component {

    // constructor(){
    //     super()
    //     this.state = {
    //         salesData: {},
    //         array: []
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
        
    // // }
    // componentDidMount(){
    //     this.getSalesData();
    // }

    // getSalesData(){
    //     // Ajax request here
    //      axios.get("http://127.0.0.1:8000/api/data")
    //         .then(response => {
    //             // console.log(response.data.data[0].sales_data)
    //                 this.setState({
    //                     salesData: {
    //                         labels: response.data.data[0].product_category,
    //                         datasets: [
    //                             {
    //                                 label: 'Product Sales',
    //                                 data: response.data.data[0].sales_data,
    //                                 backgroundColor: ['green', 'yellow', 'gold', 'violet', 'pink']
    //                             },
    //                         ]
    //                     }
    //                 })
    //                 console.log(this.state.salesData)
    //         })
            
        
    // }
    

    render() {
        return (
            <div className="content-wrapper">
                <ProductSalesChart legendPosition="bottom" />
                <Products />
            </div>

        )
    }
}
