import React from 'react'
import CounterUp from 'react-countup'

function Counter() {
    return (
        <div>
            <div className="counter">
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-4 count-value">
                            <div className="div mx-auto rounded-circle">
                                <div className="value"><CounterUp end={500000}/></div>
                            </div>
                            <p>Youtube Subscribers</p>
                        </div>
                        <div className="col-lg-4 count-value">
                            <div className="div mx-auto rounded-circle">
                                <div className="value"><CounterUp end={8000}/></div>
                            </div>
                            <p>Youtube video tutorials</p>
                        </div>
                        <div className="col-lg-4 count-value">
                            <div className="div mx-auto rounded-circle">
                                <div className="value"><CounterUp end={5000}/></div>
                            </div>
                            <p>Applications developed</p>
                        </div>
                    </div>
                </div>
            </div>
              
        </div>
    )
}

export default Counter
