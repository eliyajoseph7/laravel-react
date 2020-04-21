import React from 'react'

function AboutMe() {
    return (
      <div className="body">
  {/* First Container */}
  <div className="container-fluid cont bg-1 text-center">
    <h3 className="margin">Who Am I?</h3>
    <img src="../images/me.jpg" className="img-responsive img-circle margin me" style={{display: 'inline'}} alt="Bird" width={350} height={350} />
    <h3>I'm a university student</h3>
  </div>
  {/* Second Container */}
  <div className="container-fluid bg-2 text-center margin">
    <h3 className="margin pt-3">What Am I?</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <a href="#" className="btn btn-default btn-lg mb-5">
      <span className="glyphicon glyphicon-search" /> Search
    </a>
  </div>
  {/* Third Container (Grid) */}
  <div className="container-fluid bg-3 text-center">    
    <h3 className="margin">Where To Find Me?</h3><br />
    <div className="row">
      <div className="col-sm-4 place">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="https://thumbnails.trvl-media.com/e1wtN4qax_fG-nkOHEob4wBBpAQ=/773x530/smart/filters:quality(60)/images.trvl-media.com/hotels/17000000/16270000/16261100/16261026/5a9c9dd6_z.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Image" />
      </div>
      <div className="col-sm-4 place"> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="https://pbs.twimg.com/media/DkN9l36X0AAfF0u.jpg" className="img-responsive margin" style={{width: '100%'}} alt="Image" />
      </div>
      <div className="col-sm-4 place"> 
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <img src="https://i0.wp.com/www.school-directory.org/wp-content/uploads/2017/02/University-of-Dar-es-salaam-UDSM-Nkurumah-Hall.jpg?fit=1024%2C685&ssl=1" className="img-responsive margin" style={{width: '100%'}} alt="Image" />
      </div>
    </div>
  </div>
</div>

    )
}

export default AboutMe
