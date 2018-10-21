import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
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


    )
  }
}
