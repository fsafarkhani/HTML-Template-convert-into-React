import React, { Component } from 'react'

export default class TeatimonialP1 extends Component {
  render() {
    return (
<div>
  <div className="container">
    <div className="row title-bar">
      <div className="col-md-12">
        <h1 className="wow fadeInUp">Our Client Thoughts</h1>
        <div className="heading-border" />
        <p className="wow fadeInUp" data-wow-delay="0.4s">We are a bunch of people who embody the united spirit of our Team Adventure.</p> 
      </div>
    </div>
  </div>  
  <div className="overlay-testimonials-p1" />
    <section id="testimonials-p1" className="bg-parallax testimonials-p1-bg">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8" />
        <div className="col-md-4 bg-gradiant testimonials-p1-pos">
          <div className="testimonials-p1-cont">
            <div id="customers-testimonials" className="text-center owl-carousel owl-theme">
              <div className="testimonial">
                <img src="img/client/avatar-2.jpg" alt="testimonial" className="img-fluid rounded-circle" />
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam, unde sit, non quasi quia qui maiores odit voluptas voluptatem rem mollitia nemo est voluptates soluta ullam quis a velit.</p>
                </blockquote>
                <div className="testimonial-author">
                  <p>
                    <strong>Dreson Wetrous</strong>
                    <span>CEO &amp; Founder - Asubit</span>
                  </p>
                </div>
              </div>
              <div className="testimonial">
                <img src="img/client/avatar-6.jpg" alt="testimonial" className="img-fluid rounded-circle" />
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam, unde sit, non quasi quia qui maiores odit voluptas voluptatem rem mollitia nemo est voluptates soluta ullam quis a velit.</p>
                </blockquote>
                <div className="testimonial-author">
                  <p>
                    <strong>Del Sons</strong>
                    <span>Manager - Asubit</span>
                  </p>
                </div>
              </div>
              <div className="testimonial">
                <img src="img/client/avatar-1.jpg" alt="testimonial" className="img-fluid rounded-circle" />
                <blockquote>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed veniam, unde sit, non quasi quia qui maiores odit voluptas voluptatem rem mollitia nemo est voluptates soluta ullam quis a velit.</p>
                </blockquote>
                <div className="testimonial-author">
                  <p>
                    <strong>Rons Dan</strong>
                    <span>CEO &amp; Founder - Businessbox</span>
                  </p>
                </div>
              </div>
            </div>              
          </div>
        </div>
      </div>
    </div>
  </section>
 </div>

    )
  }
}
