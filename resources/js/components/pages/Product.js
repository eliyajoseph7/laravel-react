import React from 'react'
import { useParams } from 'react-router-dom'
import useAxiosGet from '../Hooks/HttpRequests'
import Loader from '../Loader'

function Product() {
    const { id } = useParams()
    const url = `http://127.0.0.1:8000/api/products/${id}`
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = <p>There was an error occured, try to refresh your browser!</p>
    }

    if(product.loading){
        content = 
        <div className="container h-100">
            <div className="col-xs-4 col-xs-offset-4">
                <Loader />
            </div>
        </div>
    }
    if(product.data){
        content = 
        
            <div>
                <div>
                    {/* <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:100,400,300" rel="stylesheet" type="text/css" />
                    <div className="banner-example">
                        <div id="banner">
                        <div className="active bannerItem">
                            <span className="banner-header display-1">ADVENTURE BEGINS HERE!</span>
                            <div className="banner-text">Outdoors Unlimited specalizes in high quality outdoors supplies &amp; equipment.</div>
                            <a className="btn btn-outline btn-lg" href="https://www.codepen.io">Join Now</a>
                        </div>
                        </div>
                    </div> */}
                    <div className="bg-overlay">
                        <div className="row text-center">
                        </div>
                    </div>
                </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h1 className="mt-4">{product.data.name}</h1>
                                <p className="lead">
                                    by
                                    <a href="fake_url">Start Bootstrap</a>
                                </p>
                                <hr />
                                {/* Date/Time */}
                                <p>Posted on January 1, 2019 at 12:00 PM</p>
                                <hr />
                                {/* Preview Image */}
                                <img className="img-fluid rounded" src={product.data.image} alt={product.data.name} />
                                <hr />
                                <p className="lead font-weight-bold">{product.data.name}</p>
                                <p className="lead font-weight-bold">$ {product.data.price}</p>
                                <p>{product.data.description}</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, doloribus, dolorem iusto blanditiis unde eius illum consequuntur neque dicta incidunt ullam ea hic porro optio ratione repellat perspiciatis. Enim, iure!</p>
                                <blockquote className="blockquote">
                                    <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer className="blockquote-footer">Someone famous in
                                    <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote><hr />
                                </div>
                                {/* Sidebar Widgets Column */}
                                <div className="col-md-4">
                                {/* Categories Widget */}
                                <div className="card my-4">
                                    <h5 className="card-header">Categories</h5>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                    <a href="fake_url">Web Design</a>
                                                    </li>
                                                    <li>
                                                    <a href="fake_url">HTML</a>
                                                    </li>
                                                    <li>
                                                    <a href="fake_url">Freebies</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-lg-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li>
                                                    <a href="fake_url">JavaScript</a>
                                                    </li>
                                                    <li>
                                                    <a href="fake_url">CSS</a>
                                                    </li>
                                                    <li>
                                                    <a href="fake_url">Tutorials</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.row */}
                    </div>
            </div>

    }

    return(
        <div>
            {content}
        </div>
    )
}

export default Product
