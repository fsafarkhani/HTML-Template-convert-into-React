import React, { Component } from 'react'
import News from '../../../Component/News';
import HomeAbout from './HomeAbout';
import About1 from './About1';
import About2 from './About2';
import About3 from './About3';



export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <About1></About1>
        <About2></About2>
        <About3></About3>
        <News></News>
      </div>
    )
  }
}
