import React, {useState} from 'react'
import axios from 'axios'
import {useParams, Link } from 'react-router-dom'


function TheForm(product) {
    const { id } = useParams()
    const url = `https://5e98afff5eabe7001681c474.mockapi.io/api/v1/products/${id}`

    const initialFormData = Object.freeze({
        name: product.product.name,
        price: product.product.price,
        image: product.product.image,
        dascription: product.product.description,
      });
      
     const onDelete = () => {
            console.log(`${id}`)
              axios.delete(url)
               .then(() => {
                   console.log("deleted")
               })
        }
      
  
        const [formData, setFormData] = useState(initialFormData)
      
      
  
            const handleInputChange = (event) => {
                setFormData({
                    ...formData,
                  [event.target.name]: event.target.value
              })
              
            }
            
  
            function handleSubmit(event){
              console.log(formData)
              event.preventDefault()
              const data = {
                name: formData.name,
                price: formData.price,
                image: formData.image,
                description: formData.description
              }
  
              axios.put(url, data)
                .then(response => {
                    console.log(response.data)
                })
              
              
            }
    return (
        <div className="content-wrapper">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container">
    <div className="row flex-lg-nowrap">
      <div className="col-12 col-lg-auto mb-3" style={{width: 250}}>
        <div className="card p-3">
          <div className="e-navlist e-navlist--active-bg">
            <ul className="nav">
              <li className="nav-item"><a className="nav-link px-2 active" href="fake_url"><i className="fa fa-fw fa-pencil mr-1" /><span>Edit Product</span></a></li>
              <li className="nav-item"><Link to="/admin" onClick={onDelete} className="list-group-item" style={{color: "red"}}>Delete Product<i className="fa fa-times"></i></Link></li>
              <li className="nav-item"><a className="nav-link px-2" href="fake_url"><i className="fa fa-fw fa-cog mr-1" /><span>Settings</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <div className="e-profile">
                  <div className="row">
                    <div className="col-12 col-sm-auto mb-3">
                      <div className="mx-auto" style={{width: '50%'}}>
                        <div className="d-flex justify-content-center align-items-center rounded" style={{height: 140, backgroundColor: 'rgb(233, 236, 239)'}}>
                          <img src={product.product.image} className="w-100 h-100" style={{objectFit: 'cover'}}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs">
                    <li className="nav-item"><a className="active nav-link">Settings</a></li>
                  </ul>
                  <div className="tab-content pt-3">
                    <div className="tab-pane active">
                      <form className="form" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col">
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                <label>Title</label>
                                  <input className="form-control" name="name" defaultValue={product.product.name} onChange={handleInputChange}/>
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label>Price</label>
                                  <input className="form-control" name="price" defaultValue={product.product.price} onChange={handleInputChange}/>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Image URL</label>
                                  <input className="form-control" name="image" defaultValue={product.product.image} onChange={handleInputChange} />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <label>Description</label>
                                  <textarea className="form-control" name="description" rows={5} defaultValue={product.product.description} onChange={handleInputChange} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">Save Changes</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</div>
    )
}

export default TheForm
