import React from 'react'
import { Link } from 'react-router-dom'

let count = 1
function ProductData(product) {
    return (
        <React.Fragment>
            {
                
                
                <tr>
                   
                    <td>{ count++ }</td>
                    <td style={{width: "150px"}}><img src={product.product.image} className="img-thumbnail" /></td>
                    <td>{product.product.product_name}</td>
                    <td>{product.product.description}</td>
                    <td>{product.product.price}</td>
                    <td className="justify-content-between" style={{width: "100px"}}>
                        <span className="badge bg-danger"><Link to={`/admin/edit-product/${product.product.id}`}>update</Link></span>
                        {/* <span className="badge m-auto"><i className="fa fa-trash"></i></span> */}
                    </td>
                    
                </tr>
             
            }
             
        </React.Fragment>
    )
}

export default ProductData
