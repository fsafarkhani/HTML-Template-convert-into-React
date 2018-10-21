import React, { Component } from 'react'

export default class Story extends Component {
  render() {
    return (
        <section id="story">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp">Our Success Tranformation Story</h1>
                <div className="heading-border" /> 
              </div>
            </div>
          </div>  
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="story-himg">
                  <img src="img/image-4.jpg" className="img-fluid" alt />
                </div>
              </div>
              <div className="col-md-6">
                <div className="story-desc">
                  <h3>How to grow world with Us</h3>
                  <div className="heading-border-light" /> 
                  <p>Everyone defines success differently – as much as there are people, there are different opinions. Number one in our priority list is the success of our students, alumni and their employers. We work hard in the name of the success of our alumni – being among the best and holding the high employment rate. Many desktop publishing packages and web page editors now use Lorem Ipsum.. </p>
                  <p>You can find some thoughts on success from our students and alumni here – every story is unique, but this is what success is. Everybody sees it differently. Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
                  <p className="text-right" style={{fontStyle: 'italic', fontWeight: 700}}><a href="#">Businessbox</a></p>
                  <div className="title-but"><button className="btn btn-general btn-green" role="button">Read More</button></div>
                </div>
              </div>
            </div>
          </div>  
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s"> 
                <div className="story-descb">
                  <img src="img/news/news-10.jpg" className="img-fluid" alt="..." />
                  <h6>Virtual training systems</h6>
                  <p>Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                  <a href="#"><i className="fa fa-arrow-circle-o-right" /> Read More</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.3s"> 
                <div className="story-descb">
                  <img src="img/news/news-2.jpg" className="img-fluid" alt="..." />
                  <h6>Design planning</h6>
                  <p>Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                  <a href><i className="fa fa-arrow-circle-o-right" /> Read More</a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.5s"> 
                <div className="story-descb">
                  <img src="img/news/news-8.jpg" className="img-fluid" alt="..." />
                  <h6>Remote condition monitoring</h6>
                  <p>Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                  <a href><i className="fa fa-arrow-circle-o-right" /> Read More</a>
                </div>
              </div>                        
            </div>
          </div>  
        </section>
        
    )
  }
}
