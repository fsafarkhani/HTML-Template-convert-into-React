import React, { Component } from 'react'

export default class Shop1 extends Component {
  render() {
    return (
      <div>
        <section id="shop-p1" className="shop-p1">
  <div className="container">
    <div className="row">
      <div className="col-lg-3">
        <div className="shop-p1-title">  
          <h3>Categories</h3>
          <div className="heading-border-light" /> 
        </div>
        <div className="list-group">
          <a href="#" className="list-group-item">Books</a>
          <a href="#" className="list-group-item">Shoes</a>
          <a href="#" className="list-group-item">Mobile</a>
          <a href="#" className="list-group-item">Desktop</a>
          <a href="#" className="list-group-item">Cloths</a>
          <a href="#" className="list-group-item">Electronics</a>
        </div>
         <div className="input-group ">
          <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Search Product" />
         {/* <div className="input-group-addon"><i className="fa fa-search" /></div>  */}
        </div> 
        <div className="shop-p1-title">  
          <h3>Top Sellers</h3>
          <div className="heading-border-light" /> 
        </div>
        <ul className="list-unstyled top-seller">
          <li>
            <img className="img-fluid" src="img/shop/shop-item-1.jpg" alt />
            <h6>Tshirt sort Style</h6>
            <p>$15.34</p>
          </li>
          <li>
            <img className="img-fluid" src="img/shop/shop-item-4.jpg" alt />
            <h6>Tshirt sort Style</h6>
            <p>$23.56</p>
          </li>
          <li>
            <img className="img-fluid" src="img/shop/shop-item-2.jpg" alt />
            <h6>Tshirt sort Style</h6>
            <p>$45.23</p>
          </li> 
        </ul>  
      </div> 
      <div className="col-lg-9"> 
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-1.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$44.99</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-2.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$32.49</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-3.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$55.22</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-4.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$65.42</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-1.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$23.76</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div>   
        </div>
        <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel"> 
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="img/shop/shop-banner-4.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="img/shop/shop-banner-3.jpg" alt="Second slide" />
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
        <div className="row my-4">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-4.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$75.33</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div> 
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-2.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$45.23</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
              </div>
            </div>
          </div>   
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="card ">
              <a href="#"><img className="card-img-top" src="img/shop/shop-item-1.jpg" alt /></a>
              <div className="card-body text-center">
                <div className="card-title">
                  <a href="#">Soft Raymond</a>
                </div>
                <strong>$76.34</strong>
                <div className="cart-icon text-center">
                  <a href="#"><i className="fa fa-cart-plus" /> Add to Cart</a>
                </div>
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
