import React from 'react'

function About() {
    return (
        <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Brief concerning the Good-Morning company.</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="https://blackrockdigital.github.io/startbootstrap-agency/assets/img/about/3.jpg" alt /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>2009-2011</h4>
                            <h4 className="subheading">Our Humble Beginnings</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">The Good Morning company was invented at 2008, but it was licensed at 2009. The company started with only one worker who 
                            was working from Home since there was no office at that time at the company was small with no eough funds to afford renting an appartment!</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="../images/mnazi.jpg" alt /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>March 2011</h4>
                            <h4 className="subheading">Good-Morning starts to grow</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">In march 2011, the company starded to grow and the office moved from home to a new apartment at Mnazi Mmoja -Dar es Salaam
                        with total number of seven (7) workers.</p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="../images/mobile.jpeg" alt /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>December 2012</h4>
                            <h4 className="subheading">Transition to Full Service</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">In the beginning, the company dealt only with creating websites for the customeers. In december 2012, 
                            the company started to develop mobile applications and also supplying electronic devices in Dar es Salaam.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src="../images/program.jpg" alt /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading">
                            <h4>July 2014</h4>
                            <h4 className="subheading">Phase Two Expansion</h4>
                        </div>
                        <div className="timeline-body"><p className="text-muted">The Good-Morning company has launched some of its branches in Arusha and Mwanza. The company is looking 
                            for improving the quality of people's lives by using technology. The company also provides some free proramming courses to the beginners.</p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                        <h4>Be Part<br />Of Our<br />Story!</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    )
}

export default About
