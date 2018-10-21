import React, { Component } from 'react'

export default class News extends Component {
  render() {
    return (
        <section id="comp-offer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-6  desc-comp-offer wow fadeInUp" data-wow-delay="0.2s">
                <h2>Latest News</h2>
                <div className="heading-border-light" /> 
                <button className="btn btn-general btn-green" role="button">See More</button>
              </div>
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.4s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-1.jpg" className="img-fluid" alt="..." />
                  </div>
                  <h3>Pricing Strategies for Product</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Business box. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.6s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-9.jpg" className="img-fluid" alt="..." />
                  </div>
                  <h3>Design Exhibitions of 2017</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Business box. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 desc-comp-offer wow fadeInUp" data-wow-delay="0.8s">
                <div className="desc-comp-offer-cont">
                  <div className="thumbnail-blogs">
                    <div className="caption">
                      <i className="fa fa-chain" />
                    </div>
                    <img src="img/news/news-12.jpeg" className="img-fluid" alt="..." />
                  </div>
                  <h3>Exciting New Technologies</h3>
                  <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from Business box. </p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
    )
  }
}
