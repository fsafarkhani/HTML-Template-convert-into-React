import React, { Component } from 'react'

export default class Contact1 extends Component {
    render() {
        return (
            <div>
                <section id="contact-p1" className="contact-p1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="contact-p1-cont">
                                    <h3>Contact our experienced team</h3>
                                    <div className="heading-border-light" />
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model texty.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact-p1-cont2">
                                    <address className="address-details-f">
                                        25, Dist town Street, Logn <br />
                                        California, US <br />
                                        Phone: 800 123 3456 <br />
                                        Fax: 800 123 3456 <br />
                                        Email: <a href="mailto:info@Businessbox.com" className>info@Businessbox.com</a>
                                    </address>
                                    <ul className="list-inline social-icon-f top-data">
                                        <li><a href="#" target="_empty"><i className="fa top-social fa-facebook" style={{ height: 35, width: 35, lineHeight: 35 }} /></a></li>
                                        <li><a href="#" target="_empty"><i className="fa top-social fa-twitter" style={{ height: 35, width: 35, lineHeight: 35 }} /></a></li>
                                        <li><a href="#" target="_empty"><i className="fa top-social fa-google-plus" style={{ height: 35, width: 35, lineHeight: 35 }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}