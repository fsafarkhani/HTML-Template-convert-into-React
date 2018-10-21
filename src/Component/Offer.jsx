import React, { Component } from 'react'

export default class Offer extends Component {
  render() {
    return (
        <section id="comp-offer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.2s">
                <h2>What We Offer</h2>
                <div className="heading-border-light" /> 
                <button className="btn btn-general btn-green" role="button">See Curren Offers</button>
                <button className="btn btn-general btn-white" role="button">Contact Us Today</button>
              </div>
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.4s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-11.jpg" className="img-fluid" alt="..." />
                  </div>
                  <h3>Business Management</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>          
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.6s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-13.jpg" className="img-fluid" alt="..." />
                  </div>              
                  <h3>Leadership Development</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.8s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-14.jpg" className="img-fluid" alt="..." />
                  </div>
                  <h3>Social benefits and services</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    )
  }
}
