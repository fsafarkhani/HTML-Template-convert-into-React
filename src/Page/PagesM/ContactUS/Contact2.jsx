import React, { Component } from 'react'

export default class Contact2 extends Component {
  render() {
    return (
      <div>
        <service className="contact-p2" id="contact-p2">
  <div className="container">
    <div className="row con-form">
      <div className="col-md-4">
        <input type="text" name="full-name" placeholder="Full Name" className="form-control" />
      </div>
      <div className="col-md-4">
        <input type="text" name="email" placeholder="Email Id" className="form-control" />
      </div>
      <div className="col-md-4">
        <input type="text" name="subject" placeholder="Subject" className="form-control" />
      </div>
      <div className="col-md-12"><textarea name id defaultValue={""} /></div>
      <div className="col-md-12 sub-but"><button className="btn btn-general btn-white" role="button">Send</button></div>
    </div>
  </div>
</service>

      </div>
    )
  }
}
