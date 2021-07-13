import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
        <section id="home">
        <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel"> 
          {/* Carousel items */}
          <div className="carousel-inner">
            <div className="carousel-item active slides">
              <div className="overlay" />
              <div className="slide-1" />
              <div className="hero ">
                <hgroup className="wow fadeInUp">
                  <h1>We Help <span><a href className="typewrite" data-period={2000} data-type="[ &quot; Business&quot;, &quot; Startup&quot;]">
                        <span className="wrap" /></a></span> </h1>        
                  <h3>The next big idea is waiting for its next big changer</h3>
                </hgroup>
                <a href="/ContactUs">
                <button className="btn btn-general btn-green wow fadeInUp" role="button">Contact Now</button>
                </a>
              </div>           
            </div> 
          </div> 
        </div> 
      </section> 
      
    )
  }
}
