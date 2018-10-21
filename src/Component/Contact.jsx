import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
        <div>
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
        </div>
        
    )
  }
}
