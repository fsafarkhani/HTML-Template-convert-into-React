import React, { Component } from 'react'

export default class WhatToDo extends Component {
  render() {
    return (
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
        
    )
  }
}
