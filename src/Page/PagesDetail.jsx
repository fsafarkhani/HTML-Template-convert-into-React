import React, { Component } from 'react'
import HomeAbout from './About/AboutUs/HomeAbout';
import NewsDetail from './PagesM/PagesDetail/NewsDetail';

export default class PagesDetail extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <NewsDetail></NewsDetail>
      </div>
    )
  }
}
