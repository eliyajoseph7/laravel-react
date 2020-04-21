import React, { Component } from 'react'
import Services from './homeComponents/Services'
import About from './homeComponents/About'
import Team from './homeComponents/Team'


class Home extends Component {
    render () {
        return (
          
             <div>
                <Services />
                <div className="back"></div>
                <About />
                <Team />

             </div>
            

         

        )
    }
}

export default Home;