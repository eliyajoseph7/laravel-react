import React from 'react'
import useAxiosGet from '../../components/Hooks/HttpRequests'
import { useParams } from 'react-router-dom'
import TheForm from './TheForm'
import Loader from '../../components/Loader'

function UpdateProduct() {
    
  const { id } = useParams()
  const url = `https://5e98afff5eabe7001681c474.mockapi.io/api/v1/products/${id}`
  let product = useAxiosGet(url)
    
    let content = null

    if(product.loading){
        content =
        <div className="content-wrapper">
            <Loader />
        </div>
    }
    if(product.error){
        content =
          <p>Error occured</p>
    }
    if(product.data){
   
      
        content = <TheForm product={product.data}/>
            

    }
    return (
       <div>
           {content}
       </div>
    )

 } 
export default UpdateProduct
