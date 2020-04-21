import React from 'react'
import { Link } from 'react-router-dom'

function Services() {
    return (
        <div>
                <header className="masthead">
                  <div className="container">
                    <div className="intro-text">
                      <div className="intro-lead-in">Welcome To Our Studio!</div>
                      <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
                      <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
                    </div>
                  </div>
                </header>
                  {/* Services */}
                <section className="page-section" id="services">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12 text-center">
                        <h2 className="section-heading text-uppercase">Services</h2>
                        <h3 className="section-subheading text-muted">You can <Link to="/servicesDetails">Click here</Link> for more details about our services</h3>
                      </div>
                    </div>
                    <div className="row text-center">
                      <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                          <i className="fas fa-circle fa-stack-2x text-primary" />
                          <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Electronic devices supply</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                      <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                          <i className="fas fa-circle fa-stack-2x text-primary" />
                          <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Web development</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                      <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                          <i className="fas fa-circle fa-stack-2x text-primary" />
                          <i className="fas fa-book-open fa-stack-1x fa-inverse" />
                        </span>
                        <h4 className="service-heading">Programming crash courses</h4>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                      </div>
                    </div>
                  </div>
                </section>
        </div>
    )
}

export default Services
