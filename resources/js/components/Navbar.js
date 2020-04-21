import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
                {/* Navigation */}
          <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div className="container">
              <Link className="navbar-brand js-scroll-trigger" to="/">GW-US</Link>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav text-uppercase ml-auto">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
                  </li>
                  <li className="nav-item ml-5">
                      <Link className="nav-link" to="/news">News</Link>
                  </li>
                  <li className="nav-item ml-5">
                    <Link className="nav-link" to="/products">Our Products</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

                    
                    {/* <li className="nav-item ml-5">
                      <Link className="nav-link text-white text-uppercase" to="/news">news</Link>
                    </li>
                    <li className="nav-item ml-5">
                      <Link className="nav-link text-white text-uppercase" to="/contacts">contact us</Link>
                    </li>
                  </ul>
                  <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
                  </form>
              </div>
          </div>
        </nav> */}
        </div>
    )
}
export default Navbar;