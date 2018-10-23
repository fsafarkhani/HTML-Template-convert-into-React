import React, { Component } from 'react'
import News from '../Component/News';
import Contact from '../Component/Contact';
import HomeCareer from './About/Career/HomeCareer';
import TestimonialsP2 from '../Page/About/Testimonials/TestimonialsP2';
import TestimonialsP1 from '../Page/About/Testimonials/TestimonialsP1';



export default class Testimonials extends Component {
    render() {
        return (
            <div>
                <HomeCareer></HomeCareer>
                <TestimonialsP1></TestimonialsP1>
                <TestimonialsP2></TestimonialsP2>
                
                <Contact></Contact>
                <News></News>
            </div>
        )
    }
}
