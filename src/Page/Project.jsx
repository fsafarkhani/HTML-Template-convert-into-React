import React, { Component } from 'react'
import HomeCareer from './About/Career/HomeCareer';
import News from '../Component/News';
import Project1 from './PagesM/Project/Project1';
import Project2 from './PagesM/Project/Project2';

export default class Project extends Component {
  render() {
    return (
      <div>
        <HomeCareer></HomeCareer>
        <Project1></Project1>
        <Project2></Project2> 
        <News></News>
      </div>
    )
  }
}
