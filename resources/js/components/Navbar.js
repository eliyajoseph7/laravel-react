import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            {/* Navigation */}
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand ml-5" to="/">
                {/* <img src={logo} alt="logo" style={{ width:'2rem'}} /> */}
            </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                  <li className="nav-item active ml-5">
                    <Link className="nav-link text-white text-uppercase" to="/">Home&nbsp;<i className='fa fa-home'></i> <span className="sr-only">(current)</span></Link>
                  </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="services.html">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownPortfolio" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Portfolio
                      </a>
                    </li>
                    
                    <li className="nav-item ml-5">
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
        </nav>
        </div>
    )
}
export default Navbar;