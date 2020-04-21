import React from 'react'
import { Link } from 'react-router-dom'

function ProductsList(products) {
    return (
        <React.Fragment>
            {
            products.products.map((product) => 
                <div className="col-lg-4 col-sm-6 portfolio-item" key={product.id}>
                    <div className="card h-100">
                    <Link to={`/products/${product.id}`}><img className="card-img-top" src={product.image} alt={product.name} /></Link>
                        <div className="card-body">
                            <h4 className="card-title">
                            <Link to={`/products/${product.id}`}>{product.name}</Link>
                            </h4>
                            <p className="card-text">{product.description}</p>
                        </div>
                        <Link to={`/products/${product.id}`}
                            className="btn btn-primary w-75 m-auto flex p-2 justify-center mb-3"
                        >
                            View
                        </Link>
                    </div>
                </div>
                )
            }
        </React.Fragment>
    )
}

export default ProductsList
