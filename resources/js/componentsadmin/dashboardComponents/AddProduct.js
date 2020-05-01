import React, { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function AddProduct() {
    const url = `http://127.0.0.1:8000/api/products`
    const { register, handleSubmit, watch, errors } = useForm()
   
          

           function onSubmit(data){
            console.log(data)
            axios.post(url,data)
                .then(()=> {
                    console.log(data)
                })
          }

    
    let content = null

    return (
        content = 
            <div className="content-wrapper">
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />
  <div className="container pt-3">
    <div className="row flex-lg-nowrap">
      
      <div className="col">
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <div className="e-profile">
                  <ul className="nav nav-tabs">
                    <li className="nav-item"><a href className="active nav-link">Settings</a></li>
                  </ul>
                  <div className="tab-content pt-3">
                    <div className="tab-pane active">
                      <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                          <div className="col">
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                <label>Product Name</label>
                                  <input className="form-control" name="name" type="text" ref={register({required: true})}/>
                                  {errors.name && <span style={{color: "red"}}>This field is required!</span>}
                                </div>
                              </div>
                              <div className="col">
                                <div className="form-group">
                                  <label>Price</label>
                                  <input className="form-control" type="text" name="price" ref={register({required: true, pattern: /^[0-9]+$/i })}/>
                                  {errors.price?.type ==='required' && <span style={{color: "red"}}>This field is required!</span>}
                                  {errors.price?.type ==='pattern' && <span style={{color: "red"}}>Price must be a number</span>}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="form-group">
                                  <label>Image URL</label>
                                  <input className="form-control" name="image" type="text" ref={register({required: true})}/>
                                  {errors.image && <span style={{color: "red"}}>This field is required!</span>}
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col mb-3">
                                <div className="form-group">
                                  <label>Description</label>
                                  <textarea className="form-control" name="description" rows={5} ref={register({required: true})}/>
                                  {errors.description && <span style={{color: "red"}}>This field is required!</span>}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col d-flex justify-content-end">
                            <button className="btn btn-primary" type="submit">Add product</button>
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
export default AddProduct
