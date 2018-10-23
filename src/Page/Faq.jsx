import React, { Component } from 'react'
import News from '../Component/News';
import HomeAbout from './About/AboutUs/HomeAbout';
import Contact from '../Component/Contact';
import Faq1 from '../Page/About/Faq/Faq1';

export default class Faq extends Component {
    render() {
        return (
            <div>
                <HomeAbout></HomeAbout>
                <Faq1></Faq1>
                <Contact></Contact>
                <News></News>
            </div>
        )
    }
}
