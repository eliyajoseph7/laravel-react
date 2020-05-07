import React, { Component } from 'react'
import { Doughnut, Bar, Line, Pie } from 'react-chartjs-2'

class ProductSalesChart extends Component {
    constructor(props){
        super(props)
        this.state = {
            salesData: props.salesData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right'
    }

    render() {
       
        return (
            <div className="m-3">
                <div className="col-md-8 shadow p-3">
                    <div className="card-primary">
                        <div className="card-header">My chart</div>

                        <div className="card-body">
                            <div className="chart">
                                <Bar
                                    data={this.state.salesData}
                                    options={{
                                        title: {
                                            display: this.props.displayTitle,
                                            text: 'Current month product sales',
                                            fontSize: 18
                                        },
                                        legend: {
                                            display: this.props.displayLegend,
                                            position: this.props.legendPosition
                                        },
                                        layout: {}
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