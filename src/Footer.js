import React from 'react'

 function Footer() {
    return (
    <section className="bg-secondary">
        <div className="container">
        <div className="row">
            <div className="col text-center">
            <h1 className="text-white font-weight-light text-capitalized p-3">Event Management</h1>
            <h3 className="text-light font-weight-light font-italic mb-3">We make possible your dream event happier. </h3>
            <div className="py-2">
                <a href="www.facebook.com"><i className="fab fa-facebook text-primary mx-3 fa-2x"></i></a>
                <a href="www.twitter.com"><i className="fab fa-twitter text-info mx-3 fa-2x"></i></a>
                <a href="www.youtube.com"><i className="fab fa-youtube text-danger mx-3 fa-2x"></i></a>
            </div>
            <p className="text-light py-4 m-0">&copy;Copyright 2019 - Made with <span>💗</span></p>
            </div>
        </div>
        </div>
    </section>
    )
}

export default Footer;