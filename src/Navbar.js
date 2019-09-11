import React, { Component } from 'react'

 class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-light bg-dark fixed-top">
            <a href="#" className="navbar-brand">  
                <span className="text-warning brand-name">
                     Event Management
                </span>
            </a>
            <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between mx-auto" id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3" href="# ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3" href="#">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3" href="# ">Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light text-uppercase font-weight-bold px-3" href="# ">Contact</a>
                    </li>
                </ul>
            <form className="form-inline ml-3">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search" />
                <div className="input-group-append">
                  <button  type="button" className="btn btn-secondary">
                      <i className="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
            </div>
           </form>
          </div>
          </nav>
        )
    }
}

export default Navbar
