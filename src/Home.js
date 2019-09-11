import React, { Component } from 'react'
import stage from '../src/logo/stage.png'
import weddingcouple from '../src/logo/weddingcouple.png'

class Home extends Component {
    render() {
        return (
            <div>
            <section>
              <div className="container-fluid">
                <div className="row  justify-content-center align-content-center banner" >
                  <div className="col-sm-10 text-center">
                    <h1 className="display-2 text-capitalize">
                      <span className="text-info">Event Management </span>
                      <span className="text-white font-weight-bold"> Website</span>
                    </h1>
                    <h4 className="font-weight-light font-italic text-light">
                         Every event has beautiful story, but yours should be unique.
                    </h4>
                    <a href="#" className="btn btn-warning btn-lg px-4 m-2">Press Here</a>
                    <a href="#" className="btn btn-success btn-lg px-4 m-2">Press Here</a>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-light p-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-center mb-3">
                        <h1 className="text-warning display-2">Services</h1>
                        <p className="lead text-secondary text-capitalize">we provide the best service for you events. We organise all kind of events for you. Where your enjoyment is our priority</p>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                        <li className="fa fa-birthday-cake fa-6x text-warning mb-3"></li>
                        <h1 className="text-secondary">Birthday</h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis saepe esse aut libero velit iure, aliquam rerum ipsa autem.</p>
                        <a href="#" className="btn btn-outline-warning" >Learn More</a>
                    </div>
                    <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                         <li className="mb-3" type="none"><img src={weddingcouple} width="100" height="100" /></li>
                        <h1 className="text-secondary">Wedding</h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis saepe esse aut libero velit iure, aliquam rerum ipsa autem.</p>
                        <a href="#" className="btn btn-outline-warning" >Learn More</a>
                    </div>
                    <div className="col-lg-4 col-sm-10 mx-auto mb-5">
                        <li className="mb-3" type="none"><img src={stage}  width="100" height="100"/></li>
                        <h1 className="text-secondary">DJ Party</h1>
                        <p className="text-muted my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt veritatis saepe esse aut libero velit iure, aliquam rerum ipsa autem.</p>
                        <a href="#" className="btn btn-outline-warning" >Learn More</a>
                    </div>
                </div>
            </div>
            </section>
        </div>  
        )
    }
}

export default Home
