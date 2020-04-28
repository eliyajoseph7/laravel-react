import React from 'react'
import { Link } from 'react-router-dom'
import useAxiosGet from '../components/Hooks/HttpRequests'

let count = 1
function ProductData(props) {
    return (
        <React.Fragment>
            {
                
                props.products.map((product) =>
                
                <tr key={product.id}>
                   
                    <td>{ count++ }</td>
                    <td style={{width: "150px"}}><img src={product.image} className="img-thumbnail" /></td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td className="justify-content-between" style={{width: "100px"}}>
                        <span className="badge bg-danger"><Link to={`/admin/edit-product/${product.id}`}>update</Link></span>
                        {/* <span className="badge m-auto"><i className="fa fa-trash"></i></span> */}
                    </td>
                    
                </tr>
                
                )
            }
             
        </React.Fragment>
    )
}

export default ProductData
