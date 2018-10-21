import React, { Component } from 'react'

export default class Services extends Component {
  render() {
    return (
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
        
    )
  }
}
