import React, { Component } from 'react'

export default class HomeShop extends Component {
  render() {
    return (
      <div>
                           <section id="home-shop">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
      <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    </ol>
    <div className="carousel-inner" role="listbox">
      {/* Slide One - Set the background image for this slide in the line below */}
      <div className="carousel-item active" style={{backgroundImage: 'url("img/shop/shop-banner-1.jpg")'}}>
        <div className="carousel-caption d-none d-md-block">
          <h3>Sale Box</h3>
        </div>
      </div>
      {/* Slide Two - Set the background image for this slide in the line below */}
      <div className="carousel-item" style={{backgroundImage: 'url("img/shop/shop-banner-2.jpg")'}}>
        <div className="carousel-caption d-none d-md-block">
          <h3>Cool Shop</h3>
        </div>
      </div> 
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="sr-only">Next</span>
    </a>
  </div>
</section>
      </div>
    )
  }
}
