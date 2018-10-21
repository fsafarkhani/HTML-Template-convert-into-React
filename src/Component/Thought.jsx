import React, { Component } from 'react'

export default class Thought extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
