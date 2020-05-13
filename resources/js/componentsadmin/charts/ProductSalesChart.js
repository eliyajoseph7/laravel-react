import React, { Component } from 'react'
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2'

class ProductSalesChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            salesData: {},
        }
    }

    componentDidMount(){
        this.getSalesData();
    }

    getSalesData(){
        // Ajax request here
         axios.get("http://127.0.0.1:8000/api/data")
            .then(response => {
                    this.setState({
                        salesData: {
                            labels: response.data.data[0].product_category,
                            datasets: [
                                {
                                    label: 'Product Sales',
                                    data: response.data.data[0].sales_data,
                                    lineTension: 0.3,
                                    // backgroundColor: "teal",
                                    backgroundColor: "rgba(2,117,216,0.5)",
                                    borderColor: "rgba(2,117,216,1)",
                                    pointRadius: 5,
                                    pointBackgroundColor: "rgba(2,117,216,1)",
                                    pointBorderColor: "rgba(255,255,255,0.8)",
                                    pointHoverRadius: 5,
                                    pointHoverBackgroundColor: "rgba(2,117,216,1)",
                                    pointHitRadius: 20,
                                    pointBorderWidth: 2,
                                },
                            ]
                        }
                    })
                    console.log(this.state.salesData)
            })
            
        
    }

    static defaultProps = {
        displayTitle: false,
        displayLegend: false,
        legendPosition: 'right'
    }

    render() {
       
        return (
            <div className="m-3">
                <div className="col-md-12 shadow p-3">
                    <div className="card-primary">
                        <div className="card-header">Monthly Sales</div>

                        <div className="card-body">
                            <div className="chart">
                                {console.log(this.state.salesData)}
                                <Line
                                    data={this.state.salesData}
                                    height={100}
                                    options={{
                                        title: {
                                            display: this.props.displayTitle,
                                            text: 'Current month product sales',
                                            fontSize: 18,
                                        },
                                        legend: {
                                            display: this.props.displayLegend,
                                            position: this.props.legendPosition
                                        },
                                        layout: {},
                                        maintainAspectRatio: true,
                                        tooltips: {
                                            bodyFontColor: "#fff",
                                            borderColor: '#dddfeb',
                                            borderWidth: 1,
                                            xPadding: 15,
                                            yPadding: 15,
                                            displayColors: true,
                                            caretPadding: 10,

                                        },
                                        cutoutPercentage: 50,
                                        scales: {
                                            xAxes: [{
                                                time: {
                                                    unit: 'date'
                                                },
                                                gridLines: {
                                                    display: true
                                                },
                                                ticks: {
                                                    maxTicksLimit: 7
                                                }
                                            }],
                                            yAxes: [{
                                                ticks: {
                                                    min: 0,
                                                    maxTicksLimit: 50
                                                },
                                                gridLines: {
                                                    color: "rgba(0, 0, 0, .125)",
                                                }
                                            }],
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div> 
            </div>   
            
        )
    }
}

export default ProductSalesChart