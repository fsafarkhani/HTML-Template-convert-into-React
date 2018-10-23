import React, { Component } from 'react'
import News from '../Component/News';
import HomeCareer from './About/Career/HomeCareer';
import Career1 from './About/Career/Career1';
import Career2 from './About/Career/Career2';
import Career3 from './About/Career/Career3';
import Contact from '../Component/Contact';


export default class Careers extends Component {
  render() {
    return (
        <div>
        <HomeCareer></HomeCareer>
        <Career1></Career1>
        <Career2></Career2>
        <Career3></Career3>
        <Contact></Contact>
        <News></News>
      </div>
    )
  }
}
