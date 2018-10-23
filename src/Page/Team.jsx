import React, { Component } from 'react'
import News from '../Component/News';
import Contact from '../Component/Contact';
import HomeAbout from './About/AboutUs/HomeAbout';
import Team1 from './About/Team/Team1';
import Team2 from './About/Team/Team2';

export default class Team extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <Team1></Team1>
        <Team2></Team2>
        <Contact></Contact>
        <News></News>
      </div>
    )
  }
}
