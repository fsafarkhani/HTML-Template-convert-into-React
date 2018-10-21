import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
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
        
    )
  }
}
