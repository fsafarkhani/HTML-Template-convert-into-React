import React, { Component } from 'react'

export default class Client extends Component {
  render() {
    return (
        <section id="client" className="client">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp">Our Client Say</h1>
                <div className="heading-border" />
                <p className="wow fadeInUp" data-wow-delay="0.4s">We committed to helping you maintain your Brand Value.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="client-cont wow fadeInUp" data-wow-delay="0.1s">
                  <img src="img/client/avatar-6.jpg" className="img-fluid" alt />
                  <h5>Leesa len</h5>
                  <h6>DSS CEO &amp; Cofounder</h6>
                  <i className="fa fa-quote-left" />
                  <p>The Businessbox service - it helps fill our Business, and increase our show up rate every single time.</p>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="client-cont wow fadeInUp" data-wow-delay="0.3s">
                  <img src="img/client/avatar-2.jpg" className="img-fluid" alt />
                  <h5>Dec Bol</h5>
                  <h6>TEMS founder</h6>
                  <i className="fa fa-quote-left" />
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece.</p>
                </div>
              </div>
            </div>
          </div>        
        </section>  
        
    )
  }
}
