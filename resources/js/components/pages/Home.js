import React, { Component } from 'react'
import Services from './homeComponents/Services'
import About from './homeComponents/About'
import Team from './homeComponents/Team'
import CounterUp from './homeComponents/Counter'
import Contact from './homeComponents/Contact'
import Clients from './homeComponents/Clients'


class Home extends Component {
    render () {
        return (
          
             <div>
                <Services />
                <div className="back"></div>
                <About />
                <CounterUp />
                <Contact />
                <Team />
                <Clients />

             </div>
            

         

        )
    }
}

export default Home;