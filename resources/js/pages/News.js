import React, { Component } from 'react'
import wasa1 from '../img/wasa1.jpg'
import wasa2 from '../img/wasa2.jpg'
import wasa3 from '../img/wasa3.jpg'
import axios from 'axios'

class News extends Component {
    constructor(){
        super()
        this.state={
            news:[]
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/new')
            .then(response=>{
                this.setState({news:response.data})
            });
    }

    render () {
        return (
                <div className="content_container">
                    
                    <header>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            {/* Slide One - Set the background image for this slide in the line below */}
                            <div className="carousel-item active" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
                            <img src={wasa1} />

                            <div className="carousel-caption d-none d-md-block">
                                <h3>First Slide</h3>
                                <p>This is a description for the first slide.</p>
                            </div>
                            </div>
                            {/* Slide Two - Set the background image for this slide in the line below */}
                            <div className="carousel-item" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
                            <img src={wasa2} />

                            <div className="carousel-caption d-none d-md-block">
                                <h3>Second Slide</h3>
                                <p>This is a description for the second slide.</p>
                            </div>
                            </div>
                            {/* Slide Three - Set the background image for this slide in the line below */}
                            <div className="carousel-item" style={{backgroundImage: 'url("http://placehold.it/1900x1080")'}}>
                            <img src={wasa3} />

                            <div className="carousel-caption d-none d-md-block">
                                <h3>Third Slide</h3>
                                <p>This is a description for the third slide.</p>
                            </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
                        </div>
                    </header>
                    {/* Page Content */}
                    <div className="container">
                        <h1 className="my-4">Welcome to Modern Business</h1>
                        {/* Marketing Icons Section */}
                        <div className="row">
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsam eos, nam perspiciatis natus commodi similique totam consectetur praesentium molestiae atque exercitationem ut consequuntur, sed eveniet, magni nostrum sint fuga.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-4">
                            <div className="card h-100">
                            <h4 className="card-header">Card Title</h4>
                            <div className="card-body">
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /.row */}
                        {/* Portfolio Section */}
                        <h2>Portfolio Heading</h2>
                        <div className="row">
                            {
                                this.state.news.map(info=>{
                                    return (
                                        
                                                <div className=" col-lg-4 col-sm-6  portfolio-item">
                                                    <div className="card h-100">
                                                    <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                                                        <div className="portfolio-hover">
                                                            <div className="portfolio-hover-content">
                                                                <i className="fas fa-plus fa-3x" />
                                                            </div>
                                                        </div>
                                                        <img className="img-fluid card-img-top" src={wasa3} alt />
                                                    </a>

                                                        {/* <a href="#"><img className="card-img-top wave" src="http://placehold.it/700x400" alt /></a> */}
                                                            <div className="card-body">
                                                                <h4 className="card-title">
                                                                <a href="#">{info.title}</a>
                                                                </h4>
                                                                <p className="card-text">{info.updates}</p>
                                                            </div>
                                                    </div>


                                                     {/* Portfolio Modals */}
                                                     {/* Modal 1 */}
                                                    <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
                                                        <div className="modal-dialog">
                                                            <div className="modal-content">
                                                                <div className="close-modal" data-dismiss="modal">
                                                                    <div className="lr">
                                                                    <div className="rl" />
                                                                    </div>
                                                                </div>
                                                                <div className="container">
                                                                    <div className="row">
                                                                        <div className="col-lg-8 mx-auto">
                                                                            <div className="modal-body">
                                                                            {/* Project Details Go Here */}
                                                                            <h2 className="text-uppercase">Project Name</h2>
                                                                            <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                                                            <img className="img-fluid d-block mx-auto" src={wasa3} alt />
                                                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate,
                                                                                maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                                                            <ul className="list-inline">
                                                                                <li>Date: January 2017</li>
                                                                                <li>Client: Threads</li>
                                                                                <li>Category: Illustration</li>
                                                                            </ul>
                                                                            <button className="btn btn-primary" data-dismiss="modal" type="button">
                                                                                <i className="fas fa-times" />
                                                                                Close Project</button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>    
                                  
                                    )
                                })
                                    
                            }
                        </div>
                        
                        {/* /.row */}
                        {/* Features Section */}
                        <div className="row">
                        <div className="col-lg-6">
                            <h2>Modern Business Features</h2>
                            <p>The Modern Business template by Start Bootstrap includes:</p>
                            <ul>
                            <li>
                                <strong>Bootstrap v4</strong>
                            </li>
                            <li>jQuery</li>
                            <li>Font Awesome</li>
                            <li>Working contact form with validation</li>
                            <li>Unstyled page elements for easy customization</li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid rounded" src="http://placehold.it/700x450" alt />
                        </div>
                        </div>
                        {/* /.row */}
                        <hr />
                        {/* Call to Action Section */}
                        <div className="row mb-4">
                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
                        </div>
                        <div className="col-md-4">
                            <a className="btn btn-lg btn-secondary btn-block" href="#">Call to Action</a>
                        </div>
                        </div>
                    </div>
                    {/* /.container */}
                </div>
        )
    }
}

export default News;