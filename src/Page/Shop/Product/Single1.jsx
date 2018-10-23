import React, { Component } from 'react'

export default class Single1 extends Component {
  render() {
    return (
      <div>
        <section id="single-product-p1">
  <div className="container">  
    <div className="wrapper row">
      <div className="preview col-md-6">
        <div className="preview-pic tab-content">
          <div className="tab-pane active" id="pic-1"><img src="img/shop/shop-item-1.jpg" /></div>
          <div className="tab-pane" id="pic-2"><img src="img/shop/shop-item-3.jpg" /></div>
          <div className="tab-pane" id="pic-3"><img src="img/shop/shop-item-4.jpg" /></div>
          <div className="tab-pane" id="pic-4"><img src="img/shop/shop-item-5.jpg" /></div>
          <div className="tab-pane" id="pic-5"><img src="img/shop/shop-item-2.jpg" /></div>
        </div>
        <ul className="preview-thumbnail nav nav-tabs">
          <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="img/shop/shop-item-1.jpg" /></a></li>
          <li><a data-target="#pic-2" data-toggle="tab"><img src="img/shop/shop-item-3.jpg" /></a></li>
          <li><a data-target="#pic-3" data-toggle="tab"><img src="img/shop/shop-item-4.jpg" /></a></li>
          <li><a data-target="#pic-4" data-toggle="tab"><img src="img/shop/shop-item-5.jpg" /></a></li>
          <li><a data-target="#pic-5" data-toggle="tab"><img src="img/shop/shop-item-2.jpg" /></a></li>
        </ul>
      </div>
      <div className="details col-md-6">
        <h3 className="product-title">Women trend fashion</h3>
        <div className="rating">
          <div className="stars">
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star checked" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
          </div>
          <span className="review-no">4 reviews</span>
        </div>
        <p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
        <h4 className="price">current price: <span>$180</span></h4>
        <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
        <h5 className="sizes">sizes:
          <span className="size" data-toggle="tooltip" title="small">s</span>
          <span className="size" data-toggle="tooltip" title="medium">m</span>
          <span className="size" data-toggle="tooltip" title="large">l</span>
          <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
        </h5>
        <h5 className="colors">colors:
          <span className="color orange not-available" data-toggle="tooltip" title="Not In store" />
          <span className="color green" />
          <span className="color blue" />
        </h5>
        <div className="action">
          <div className="title-but"><button className="btn btn-general btn-white" role="button"><i className="fa fa-cart-plus" /> Add to Cart</button></div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="service-h-tab"> 
          <nav className="nav nav-tabs" id="myTab" role="tablist">
            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-expanded="true">Reviews</a>
            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">Desciption</a> 
          </nav>
          <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> 
              <div className="review-block">
                <div className="row">
                  <div className=" col-sm-3">
                    <img src="img/client/avatar-3.jpg" className="img-rounded" />
                    <div className="review-block-name"><a href="#">Nktailor</a></div>
                  </div>
                  <div className="col-sm-9">
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                    </div>
                    <div className="review-block-title">this was nice in buy</div>
                    <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div> 
                  </div>
                </div> 
              </div> 
              <div className="review-block">
                <div className="row">
                  <div className="col-sm-3">
                    <img src="img/client/avatar-1.jpg" className="img-rounded" />
                    <div className="review-block-name"><a href="#">Nktailor</a></div>
                  </div>
                  <div className="col-sm-9">
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                    </div>
                    <div className="review-block-title">this was nice in buy</div>
                    <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div> 
                  </div>
                </div> 
              </div> 
              <div className="review-block">
                <div className="row">
                  <div className="col-sm-3">
                    <img src="img/client/avatar-2.jpg" className="img-rounded" /> 
                    <div className="review-block-name"><a href="#">Nktailor</a></div>
                  </div>
                  <div className="col-sm-9">
                    <div className="rating">
                      <div className="stars">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                    </div>
                    <div className="review-block-title">this was nice in buy</div>
                    <div className="review-block-description">this was nice in buy. this was nice in buy. this was nice in buy. this was nice in buy this was nice in buy this was nice in buy this was nice in buy this was nice in buy</div> 
                  </div>
                </div> 
              </div> 
            </div>
            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
              <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute</p>
              <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute</p>
            </div>  
          </div>
        </div>
      </div> 
    </div>
  </div></section>

      </div>
    )
  }
}
