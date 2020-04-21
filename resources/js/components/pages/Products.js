import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../Loader'
import useAxiosGet from '../Hooks/HttpRequests'
import ProductsList from '../ProductsList'
import Pagination from '../Pagination'

function Products() {
    const url = `https://5e98afff5eabe7001681c474.mockapi.io/api/v1/products`
    
    let products = useAxiosGet(url)
    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(6)
    

    


    // Get current product
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage

    // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    let content = null

    if(products.error){
        content = <p>There was an error occured, try to refresh your browser!</p>
    }

    if(products.loading){
        content = 
    <div className="container h-100">
        <div className="col-xs-4 col-xs-offset-4">
            <Loader/>
        </div>
    </div>



    }
    if(products.data){
        const currentProducts = products.data.slice(indexOfFirstProduct, indexOfLastProduct)

        content = 
        <div>
            <div>
                <div className="bg-overlay">
                    <div className="row text-center">
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className="my-4">Welcome to Modern Business</h1>
                {/* Marketing Icons Section */}
                <div className="row shadow">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                        <h4 className="card-header">Dar es Salaam</h4>
                        <div className="card-body">
                            <p className="card-text">At <strong>LAPF Tower</strong> -Kijitonyama 13th floor.<br/>
                            contacts: <strong><a href="fake_url">0657207180</a></strong><br/>
                            Email: <strong><a href="fake_url">gm@gmail.com</a></strong>
                            </p>

                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                        <h4 className="card-header">Mwanza</h4>
                        <div className="card-body">
                            <p className="card-text">At <strong>Nyegezi bus stand</strong> -near Mazimbe road.<br/>
                            Contacts: <strong><a href="">0122246573</a></strong><br/>
                            Email: <strong><a href="">gus@gmail.com</a></strong></p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100">
                        <h4 className="card-header">Arusha</h4>
                        <div className="card-body">
                            <p className="card-text">At <strong>Mangi Palace House</strong> -near Arusha supermaket.<br/>
                            Contacts: <strong><a href="">2233445577</a></strong><br/>
                            Email: <strong><a href="">gwus@gmail.com</a></strong>
                            </p>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="btn btn-primary">Learn More</a>
                        </div>
                        </div>
                    </div>
                </div>
            
                {/* Portfolio Section */}
                <h2>Our Products</h2>
                <div className="row">
                    
                    <ProductsList products={currentProducts}/>
                   
                </div>
                <div>
                    <Pagination
                        productsPerPage={productsPerPage}
                        totalProducts={products.data.length}
                        paginate={paginate}
                    />
                </div>
                

                {/* Features Section */}
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Interested in programming?</h2>
                        <p>The programming courses we offer for free includes:</p>
                        <ul>
                            <li>
                                <strong>Bootstrap v4</strong>
                            </li>
                            <li>jQuery</li>
                            <li>Django python framework</li>
                            <li>Reactjs and React Native</li>
                            <li>Laravel php framework</li>
                        </ul>
                        <p>All of the above courses are for those who are new in programming. You can view some of courses in <a target="_blank" rel="nofollow" href="https://github.com/eliyajoseph7">my github account</a></p>
                        <p>You can find the best tutorial videos in <a target="_blank" rel="nofollow" href="https://www.youtube.com/user/QuentinWatt/videos">this youtube account -></a></p>
                    </div>
                    <div className="col-lg-6">
                        {/* <img className="img-fluid rounded" src="http://placehold.it/700x450"  /> */}
                        <iframe width="550" height="315" src="https://www.youtube.com/embed/HDEVMozZhv8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        </div>
    }
    return (
        <div>
            {content}
        </div>
        

    )
}

export default Products
