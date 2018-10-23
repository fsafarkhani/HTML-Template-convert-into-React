import React, { Component } from 'react'
import HomeAbout from './About/AboutUs/HomeAbout';
import NewsGrid from './PagesM/Grid/NewsGrid';

export default class Grid extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <NewsGrid></NewsGrid>
      </div>
    )
  }
}
