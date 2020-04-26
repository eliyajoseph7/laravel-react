import React from 'react'

function ServicesDetails() {
    return (
        <div>

            <div className="bg-overlay">
                <div className="row text-center">
                </div>
            </div>
            <div className="back-img">
                <img src="https://unsplash.imgix.net/photo-1416339442236-8ceb164046f8?q=75&fm=jpg&s=8eb83df8a744544977722717b1ea4d09"/>
            </div>
            <div className="row p-5">
                <div className="col-lg-12 text-center">
                    <h1 className="section-heading text-uppercase">Our Services</h1>
                </div>
            </div>
       <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("../images/electronic.jpg")'}} />
                    <div className="col-lg-6 order-lg-1 my-auto px-5 showcase-text">
                        <h2>Electronic devices supply</h2>
                        <p className="lead mb-0">We are dealig with the supplying of highly advanced Electronic materials with a high quality, such as:</p>
                            <ul>
                                <li>Laptops</li>
                                <li>Mobile phones</li>
                                <li>Fridges</li>
                                <li>Televisions</li>
                                <li>Electric fans</li>
                                <li>Digital cameras, etc.</li>
                            </ul>
                        
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 text-white showcase-img" style={{backgroundImage: 'url("../images/code.jpg")'}} />
                    <div className="col-lg-6 my-auto px-5 showcase-text">
                        <h2>Web development</h2>
                        <p className="lead mb-0">Are you looking for an advanced and very wonderfull websites!.. <br/>Here we make you happier<span style={{color: 'gold'}}><i className="fas fa-smile"></i></span> than ever. we are also developing
                        very interesting mobile applications in both android and iphones.
                        </p>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{backgroundImage: 'url("../images/course.jpg")'}} />
                    <div className="col-lg-6 order-lg-1 my-auto px-5 showcase-text">
                        <h2>Programming crash courses</h2>
                        <p className="lead mb-0">We offer a lot of programming crash courses for free. These courses are only for those who are new in programming. The courses offered includes: </p>
                            <ul>
                                <li>
                                    <strong>Bootstrap v4</strong>
                                </li>
                                <li>jQuery</li>
                                <li>Django python framework</li>
                                <li>Reactjs and React Native</li>
                                <li>Laravel php framework</li>
                            </ul>
                       
                    </div>
                </div>
                </div>    
        </section>

        </div>

    )
}

export default ServicesDetails
