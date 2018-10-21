import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">


        {/*====================================================
                         HEADER
======================================================*/} 
        <header>
          {/* Top Navbar  */}
          <div className="top-menubar">
            <div className="topmenu">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <ul className="list-inline top-contacts">
                      <li>
                        <i className="fa fa-envelope" /> Email: <a href="mailto:info@themeborn.com">info@themeborn.com</a>
                      </li>
                      <li>
                        <i className="fa fa-phone" /> Hotline: (1) 111 222 33
                      </li>
                    </ul>
                  </div> 
                  <div className="col-md-5">
                    <ul className="list-inline top-data">
                      <li><a href="#" target="_empty"><i className="fa top-social fa-facebook" /></a></li>
                      <li><a href="#" target="_empty"><i className="fa top-social fa-twitter" /></a></li>
                      <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus" /></a></li> 
                      <li><a href="#" className="log-top" data-toggle="modal" data-target="#login-modal">Login</a></li>  
                    </ul>
                  </div>
                </div>
              </div>
            </div> 
          </div> 
          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light" id="mainNav" data-toggle="affix">
            <div className="container">
              <a className="navbar-brand smooth-scroll" href="index.html">
                <img src="img/logo-s.png" alt="logo" />
              </a> 
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"> 
                <span className="navbar-toggler-icon" />
              </button>  
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="index.html">Home</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a> 
                    <div className="dropdown-menu dropdown-cust" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="about.html">About Us</a>
                      <a className="dropdown-item" href="careers.html">Career Oprtunity</a>
                      <a className="dropdown-item" href="team.html">Meet Our Team</a>
                      <a className="dropdown-item" href="faq.html">FAQ</a>
                      <a className="dropdown-item" href="testimonials.html">Testimonials</a>
                    </div>
                  </li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="services.html">Services</a></li> 
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Admin Panel</a> 
                    <div className="dropdown-menu dropdown-cust" aria-labelledby="navbarDropdownMenuLink"> 
                      <a className="dropdown-item" target="_empty" href="admin/index.html">Dashboard</a> 
                      <a className="dropdown-item" target="_empty" href="admin/chart.html">Charts</a> 
                      <a className="dropdown-item" target="_empty" href="admin/email.html">Email</a> 
                      <a className="dropdown-item" target="_empty" href="admin/faq.html">FAQ</a> 
                      <a className="dropdown-item" target="_empty" href="admin/profile.html">Profile</a> 
                      <a className="dropdown-item" target="_empty" href="admin/tables.html">Tables</a> 
                      <a className="dropdown-item" target="_empty" href="admin/invoice.html">Invoice</a> 
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a> 
                    <div className="dropdown-menu dropdown-cust" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="news-list.html">News list layouts</a>
                      <a className="dropdown-item" href="news-grid.html">News grid layouts</a>
                      <a className="dropdown-item" href="news-details.html">News Details</a> 
                      <a className="dropdown-item" href="project.html">Project</a>
                      <a className="dropdown-item" href="contact.html">Contact Us</a>
                      <a className="dropdown-item" href="comming-soon.html">Comming Soon</a>
                      <a className="dropdown-item" href="pricing.html">Pricing Tables</a>
                      <a className="dropdown-item" href="admin/404.html">404</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a> 
                    <div className="dropdown-menu dropdown-cust mega-menu" aria-labelledby="navbarDropdownMenuLink">
                      <div className="row">
                        <div className="col-md-5">
                          <a className="dropdown-item" href="shop.html">Shop Detail</a>
                          <a className="dropdown-item" href="single-product.html">Single Product</a>
                          <a className="dropdown-item" href="cart.html">Cart</a>
                          <a className="dropdown-item" href="checkout.html">Checkout</a>
                          <a className="dropdown-item" href="myaccount.html">Myaccount</a>
                        </div>
                        <div className="col-md-7 mega-menu-img m-auto text-center pl-0">
                          <a href="#"><img src="img/offer_icon.png" alt className="img-fluid" /></a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <i className="search fa fa-search search-btn" />
                    <div className="search-open">
                      <div className="input-group animated fadeInUp">
                        <input type="text" className="form-control" placeholder="Search" aria-describedby="basic-addon2" />
                        <span className="input-group-addon" id="basic-addon2">Go</span>
                      </div>
                    </div>
                  </li> 
                  <li>
                    <div className="top-menubar-nav">
                      <div className="topmenu ">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-9">
                              <ul className="list-inline top-contacts">
                                <li>
                                  <i className="fa fa-envelope" /> Email: <a href="mailto:info@htmlstream.com">info@htmlstream.com</a>
                                </li>
                                <li>
                                  <i className="fa fa-phone" /> Hotline: (1) 396 4587 99
                                </li>
                              </ul>
                            </div> 
                            <div className="col-md-3">
                              <ul className="list-inline top-data">
                                <li><a href="#" target="_empty"><i className="fa top-social fa-facebook" /></a></li>
                                <li><a href="#" target="_empty"><i className="fa top-social fa-twitter" /></a></li>
                                <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus" /></a></li> 
                                <li><a href="#" className="log-top" data-toggle="modal" data-target="#login-modal">Login</a></li>  
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                  </li>
                </ul>  
              </div>
            </div>
          </nav>
        </header> 
        {/*====================================================
                    LOGIN OR REGISTER
======================================================*/}
        <section id="login">
          <div className="modal fade" id="login-modal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style={{display: 'none'}}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header" align="center">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span className="fa fa-times" aria-hidden="true" />
                  </button>
                </div>
                <div id="div-forms">
                  <form id="login-form">
                    <h3 className="text-center">Login</h3>
                    <div className="modal-body">
                      <label htmlFor="username">Username</label> 
                      <input id="login_username" className="form-control" type="text" placeholder="Enter username " required />
                      <label htmlFor="username">Password</label> 
                      <input id="login_password" className="form-control" type="password" placeholder="Enter password" required />
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </div>
                    </div>
                    <div className="modal-footer text-center">
                      <div>
                        <button type="submit" className="btn btn-general btn-white">Login</button>
                      </div>
                      <div>
                        <button id="login_register_btn" type="button" className="btn btn-link">Register</button>
                      </div>
                    </div>
                  </form>
                  <form id="register-form" style={{display: 'none'}}>
                    <h3 className="text-center">Register</h3>
                    <div className="modal-body"> 
                      <label htmlFor="username">Username</label> 
                      <input id="register_username" className="form-control" type="text" placeholder="Enter username" required />
                      <label htmlFor="register_email">E-mailId</label> 
                      <input id="register_email" className="form-control" type="text" placeholder="Enter eMail" required />
                      <label htmlFor="register_password">Password</label> 
                      <input id="register_password" className="form-control" type="password" placeholder="Password" required />
                    </div>
                    <div className="modal-footer">
                      <div>
                        <button type="submit" className="btn btn-general btn-white">Register</button>
                      </div>
                      <div>
                        <button id="register_login_btn" type="button" className="btn btn-link">Log In</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>      
        {/*====================================================
                         HOME
======================================================*/}
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
                  <button className="btn btn-general btn-green wow fadeInUp" role="button">Contact Now</button>
                </div>           
              </div> 
            </div> 
          </div> 
        </section> 
        {/*====================================================
                        ABOUT
======================================================*/}
        <section id="about" className="about">
          <div className="container">
            <div className="row title-bar">
              <div className="col-md-12">
                <h1 className="wow fadeInUp">We committed to helping</h1>
                <div className="heading-border" />
                <p className="wow fadeInUp" data-wow-delay="0.4s">Businessbox will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Businessbox provide great things.</p>
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
        {/*====================================================
                        OFFER
======================================================*/}
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
        {/*====================================================
                     WHAT WE DO
======================================================*/}
        <section className="what-we-do bg-gradiant">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <h3>What we Do</h3>
                <div className="heading-border-light" /> 
                <p className="desc">We partner with clients to put recommendations into practice. </p>
              </div>
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-briefcase" />
                      <h6>Workspace</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-shopping-bag" />
                      <h6>Storefront</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-building-o" />
                      <h6>Apartments</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-bed" />
                      <h6>Hotels</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-hourglass-2" />
                      <h6>Concept</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                  <div className="col-md-4  col-sm-6">
                    <div className="what-we-desc">
                      <i className="fa fa-cutlery" />
                      <h6>Restaurant</h6>
                      <p className="desc">Contrary to popular belief, Lorem Ipsum is not simply random text. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>      
        </section> 
        {/*====================================================
                      STORY
======================================================*/} 
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
        {/*====================================================
                  COMPANY THOUGHT
======================================================*/}
        <div className="overlay-thought" />
        <section id="thought" className="bg-parallax thought-bg">
          <div className="container">
            <div id="thought-desc" className="row title-bar title-bar-thought owl-carousel owl-theme">
              <div className="col-md-12 ">
                <div className="heading-border bg-white" />
                <p className="wow fadeInUp" data-wow-delay="0.4s">Businessbox will deliver value to all the stakeholders and will attain excellence and leadership through such delivery of value. We will strive to support the stakeholders in all activities related to us. Businessbox provide great things.</p>
                <h6>John doe</h6>
              </div>
              <div className="col-md-12 thought-desc">
                <div className="heading-border bg-white" />
                <p className="wow fadeInUp" data-wow-delay="0.4s">Ensuring quality in Businessbox is an obsession and the high quality standards set by us are achieved through a rigorous quality assurance process. Quality assurance is performed by an independent team of trained experts for each project. </p>
                <h6>Tom John</h6>
              </div>
            </div>
          </div>         
        </section> 
        {/*====================================================
                   SERVICE-HOME
======================================================*/} 
        <section id="service-h">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="service-himg"> 
                  <iframe src="https://www.youtube.com/embed/754f1w90gQU?rel=0&controls=0&showinfo=0" frameBorder={0} allowFullScreen />
                </div>
              </div>
              <div className="col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-h-desc">
                  <h3>We are Providing great Services</h3>
                  <div className="heading-border-light" /> 
                  <p>Businessbox offer the full spectrum of services to help organizations work better. Everything from creating standards of excellence to training your people to work in more effective ways.</p>  
                  <div className="service-h-tab"> 
                    <nav className="nav nav-tabs" id="myTab" role="tablist">
                      <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-expanded="true">Developing</a>
                      <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile">Training</a> 
                      <a className="nav-item nav-link" id="my-profile-tab" data-toggle="tab" href="#my-profile" role="tab" aria-controls="my-profile">Medical</a> 
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute. exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute. </p></div>
                      <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute</p>
                      </div> 
                      <div className="tab-pane fade" id="my-profile" role="tabpanel" aria-labelledby="my-profile-tab">
                        <p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute</p>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </section>
        {/*====================================================
                      CLIENT
======================================================*/}
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
        {/*====================================================
                    CONTACT HOME
======================================================*/}
        <div className="overlay-contact-h" />
        <section id="contact-h" className="bg-parallax contact-h-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-h-cont">
                  <h3 className="cl-white">Continue The Conversation</h3><br />
                  <form>
                    <div className="form-group cl-white">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" /> 
                    </div>  
                    <div className="form-group cl-white">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" /> 
                    </div>  
                    <div className="form-group cl-white">
                      <label htmlFor="subject">Subject</label>
                      <input type="text" className="form-control" id="subject" aria-describedby="subjectHelp" placeholder="Enter subject" /> 
                    </div>  
                    <div className="form-group cl-white">
                      <label htmlFor="message">Message</label>
                      <textarea className="form-control" id="message" rows={3} defaultValue={""} />
                    </div>  
                    <button className="btn btn-general btn-white" role="button"><i fa fa-right-arrow />GET CONVERSATION</button>
                  </form>
                </div>
              </div>
            </div>
          </div>         
        </section> 
        {/*====================================================
                       NEWS
======================================================*/}
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
        {/*====================================================
                      FOOTER
======================================================*/} 
        <footer> 
          <div id="footer-s1" className="footer-s1">
            <div className="footer">
              <div className="container">
                <div className="row">
                  {/* About Us */}
                  <div className="col-md-3 col-sm-6 ">
                    <div><img src="img/logo-w.png" alt className="img-fluid" /></div>
                    <ul className="list-unstyled comp-desc-f">
                      <li><p>Businessbox is a corporate business theme. You can customize what ever you think to make your website much better from your great ideas. </p></li> 
                    </ul><br /> 
                  </div>
                  {/* End About Us */}
                  {/* Recent News */}
                  <div className="col-md-3 col-sm-6 ">
                    <div className="heading-footer"><h2>Useful Links</h2></div>
                    <ul className="list-unstyled link-list">
                      <li><a href="about.html">About us</a><i className="fa fa-angle-right" /></li> 
                      <li><a href="project.html">Project</a><i className="fa fa-angle-right" /></li> 
                      <li><a href="careers.html">Career</a><i className="fa fa-angle-right" /></li> 
                      <li><a href="faq.html">FAQ</a><i className="fa fa-angle-right" /></li> 
                      <li><a href="contact.html">Contact us</a><i className="fa fa-angle-right" /></li> 
                    </ul>
                  </div>
                  {/* End Recent list */}
                  {/* Recent Blog Entries */}
                  <div className="col-md-3 col-sm-6 ">
                    <div className="heading-footer"><h2>Recent Post Entries</h2></div>
                    <ul className="list-unstyled thumb-list">
                      <li>
                        <div className="overflow-h">
                          <a href="#">Praesent ut consectetur diam.</a>
                          <small>02 OCT, 2017</small>
                        </div>
                      </li>
                      <li>
                        <div className="overflow-h">
                          <a href="#">Maecenas pharetra tellus et fringilla.</a>
                          <small>02 OCT, 2017</small>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* End Recent Blog Entries */}
                  {/* Latest Tweets */}
                  <div className="col-md-3 col-sm-6">
                    <div className="heading-footer"><h2>Get In Touch</h2></div>
                    <address className="address-details-f">
                      25, Dist town Street, Logn <br />
                      California, US <br />
                      Phone: 800 123 3456 <br />
                      Fax: 800 123 3456 <br />
                      Email: <a href="mailto:info@Businessbox.com" className>info@Businessbox.com</a>
                    </address>  
                    <ul className="list-inline social-icon-f top-data">
                      <li><a href="#" target="_empty"><i className="fa top-social fa-facebook" /></a></li>
                      <li><a href="#" target="_empty"><i className="fa top-social fa-twitter" /></a></li>
                      <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus" /></a></li> 
                    </ul>
                  </div>
                  {/* End Latest Tweets */}
                </div>
              </div>{/*/container */}
            </div> 
          </div>
          <div id="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div id="footer-copyrights">
                    <p>Copyrights © 2017 All Rights Reserved by Businessbox. <a href="#">Privacy Policy</a> <a href="#">Terms of Services</a></p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
          <a href="#home" id="back-to-top" className="btn btn-sm btn-green btn-back-to-top smooth-scrolls hidden-sm hidden-xs" title="home" role="button">
            <i className="fa fa-angle-up" />
          </a>
        </footer>
        {/*Global JavaScript */}
        {/* Plugin JavaScript */}

      </div>
    );
  }
}

export default App;
