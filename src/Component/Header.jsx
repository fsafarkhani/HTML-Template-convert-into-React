import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
        <header>
          {/* Top Navbar  */}
          <div className="top-menubar">
            <div className="topmenu">
              <div className="container">
                <div className="row">
                  <div className="col-md-7">
                    <ul className="list-inline top-contacts">
                      <li>
                        <i className="fa fa-envelope" /> Email: <a href="mailto:info@Pinnecs.com">info@Pinnecs.com</a>
                      </li>
                      <li>
                        <i className="fa fa-phone" /> Tel:+964(0)7507512673 -7511048923
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
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="/">Home</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>
                    <div className="dropdown-menu dropdown-cust" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/AboutUS">About Us</a>
                      <a className="dropdown-item" href="/Careers">Career Oprtunity</a>
                      <a className="dropdown-item" href="/Team">Meet Our Team</a>
                      <a className="dropdown-item" href="/Faq">FAQ</a>
                      <a className="dropdown-item" href="/Testimonials">Testimonials</a>
                    </div>
                  </li>
                  <li className="nav-item"><a className="nav-link smooth-scroll" href="/services">Services</a></li>
                   {/* Admin bar menu */}
                     {/* <li className="nav-item dropdown">
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
                  </li> */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                    <div className="dropdown-menu dropdown-cust" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="/List">News list layouts</a>
                      <a className="dropdown-item" href="/Grid">News grid layouts</a>
                      <a className="dropdown-item" href="/PagesDetail">News Details</a>
                      <a className="dropdown-item" href="/Project">Project</a>
                      <a className="dropdown-item" href="/ContactUS">Contact Us</a>
                      {/* <a className="dropdown-item" href="/Comming">Comming Soon</a> */}
                      <a className="dropdown-item" href="/Pricing">Pricing Tables</a>
                      {/* <a className="dropdown-item" href="admin/404.html">404</a> */}
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle smooth-scroll" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                    <div className="dropdown-menu dropdown-cust mega-menu" aria-labelledby="navbarDropdownMenuLink">
                      <div className="row">
                        <div className="col-md-5">
                          <a className="dropdown-item" href="/ShopDetail">Shop Detail</a>
                          <a className="dropdown-item" href="/Product">Single Product</a>
                          <a className="dropdown-item" href="/Cart">Cart</a>
                          <a className="dropdown-item" href="/Checkout">Checkout</a>
                          <a className="dropdown-item" href="/Account">Myaccount</a>
                        </div>
                        <div className="col-md-7 mega-menu-img m-auto text-center pl-0">
                          <a href="#"><img src="img/offer_icon.png" alt className="img-fluid" /></a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                  {/* <i className="search fa fa-search search-btn" /> */}
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
                                  <i className="fa fa-envelope" /> Email: <a href="mailto:info@Pinnecs.com">info@Pinnecs.com</a>
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

    )
  }
}
