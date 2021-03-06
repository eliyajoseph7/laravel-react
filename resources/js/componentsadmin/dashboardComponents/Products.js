import React, { useState, useEffect } from 'react'
import ProductData from '../ProductData'
import { Link } from 'react-router-dom'
import useAxiosGet from '../../components/Hooks/HttpRequests'
import Pagination from '../Pagination'
import Loader from '../../components/Loader'

function Products() {
    const url = `http://127.0.0.1:8000/api/products`
    let products = useAxiosGet(url)

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage] = useState(10)
    const [ search, setSearch ] = useState('')

    function updateSearch (event)  {
       setSearch(
           event.target.value.substr(0, 20)
       )
    }

    // getting the current page

    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage

    // change the page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    let content = null

    if(products.loading){
        content = 
                    <Loader />
           
    }

    if(products.error){
        content = <p>Error occured</p>
    }

    if(products.data){
        const currentProducts = products.data.slice(indexOfFirstProduct,indexOfLastProduct)
        let filteredProducts = currentProducts.filter(
                (product) => {
                    return product.product_name.toLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
                     
                    // return product.product_name.toLowerCase().includes(search.toLocaleLowerCase())
                }
            )
  
        
        content = (
            <div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="p-3">
                            <Link
                                to="/admin/add-product"
                                className="btn btn-primary"
                            >
                                Add product
                            </Link>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            Products Table
                                        </h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">{search}</div>
                                            <div className="col-sm-6">
                                                <div>
                                                    <label className="float-right">
                                                        Search:
                                                        <input
                                                            type="text"
                                                            className="form-control input-sm"
                                                            onChange={updateSearch}
                                                            defaultValue={search}
                                                        />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <table className="table table-bordered table-responsive">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 }}>
                                                        #
                                                    </th>
                                                    <th>Picture</th>
                                                    <th>Product Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th style={{ width: 40 }}>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    filteredProducts.map((product, key) =>
                                                        <ProductData key={key}
                                                                product={product}
                                                                products={currentProducts} 
                                                            />
                                                            )
                                                           
                                                }
                                                
                                                
                                            </tbody>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: 10 }}>
                                                        #
                                                    </th>
                                                    <th>Picture</th>
                                                    <th>Product Name</th>
                                                    <th>Description</th>
                                                    <th>Price</th>
                                                    <th style={{ width: 40 }}>
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                    {/* <div className="card-footer clearfix">
                            <ul className="pagination pagination-sm m-0 float-right">
                            <li className="page-item"><a className="page-link" href="#">«</a></li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">»</a></li>
                            </ul>
                        </div> */}
                                    <div>
                                        <Pagination
                                            productsPerPage={productsPerPage}
                                            totalProducts={products.data.length}
                                            paginate={paginate}
                                        />
                                    </div>
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}

                            {/* /.col */}
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </section>
            </div>
        );

    }
    return (
        <div>
            {content}
        </div>
        
    )
}

export default Products
