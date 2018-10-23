import React, { Component } from 'react'

export default class Table extends Component {
  render() {
    return (
      <div>
     <section id="price">  
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6">
        <div className="pricingTable">
          <div className="pricing-icon">
            <i className="fa fa-globe" />
          </div>
          <div className="price-Value">
            <span className="currency">$</span>10
          </div>
          <span className="month">per month</span>
          <div className="pricingHeader">
            <h3 className="title">STANDARD</h3>
          </div>
          <div className="pricing-content">
            <ul>
              <li>Accounts &amp; Contact</li>
              <li>Task &amp; Event Tracking</li>
              <li>Google Apps</li>
              <li>Mobile Access</li>
              <li>Content library</li>
            </ul>
          </div>
          <a href="#" className="pricingTable-signup">Sign Up</a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="pricingTable active">
          <div className="pricing-icon">
            <i className="fa fa-rocket" />
          </div>
          <div className="price-Value">
            <span className="currency">$</span>20
          </div>
          <span className="month">per month</span>
          <div className="pricingHeader">
            <h3 className="title">Star</h3>
          </div>
          <div className="pricing-content">
            <ul>
              <li>Oportunity Tracking</li>
              <li>Customizable Sale</li>
              <li>Email Template</li>
              <li>10 Type Persona Form</li>
              <li>Dashboards</li>
            </ul>
          </div>
          <a href="#" className="pricingTable-signup">Sign Up</a>
        </div>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="pricingTable">
          <div className="pricing-icon">
            <i className="fa fa-briefcase" />
          </div>
          <div className="price-Value">
            <span className="currency">$</span>40
          </div>
          <span className="month">per month</span>
          <div className="pricingHeader">
            <h3 className="title">Business</h3>
          </div>
          <div className="pricing-content">
            <ul>
              <li>Mass Email</li>
              <li>Compaigns</li>
              <li>Sales Teams</li>
              <li>Offline Access</li>
              <li>Custom Apps access</li>
            </ul>
          </div>
          <a href="#" className="pricingTable-signup">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</section>
   
      </div>
    )
  }
}
