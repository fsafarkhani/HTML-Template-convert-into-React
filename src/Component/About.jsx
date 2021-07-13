import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
        <section id="about" className="about">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp">We committed to helping</h1>
                <div className="heading-border" />
                <p className="wow fadeInUp" data-wow-delay="0.4s"> template will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us.  template provide great things.</p>
                <div className="title-but"><button className="btn btn-general btn-green" role="button">Read More</button></div>
              </div>
            </div>
          </div>  
          {/* About right side withBG parallax */}
          <div className="container-fluid">
            <div className="row"> 
              <div className="col-md-4 bg-starship">
                <div className="about-content-box wow fadeInUp" data-wow-delay="0.3s">
                  <i className="fa fa-snowflake-o" />
                  <h5>Thoughts Leadership Platform</h5>
                  <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div> 
              <div className="col-md-4 bg-chathams">
                <div className="about-content-box wow fadeInUp" data-wow-delay="0.5s">
                  <i className="fa fa-circle-o-notch" />
                  <h5>Corporate world Platform</h5>
                  <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div> 
              <div className="col-md-4 bg-matisse">
                <div className="about-content-box wow fadeInUp" data-wow-delay="0.7s">
                  <i className="fa fa-hourglass-o" />
                  <h5>End to End Testing Platform</h5>
                  <p className="desc">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
              </div> 
            </div> 
          </div>       
        </section> 
        
    )
  }
}
