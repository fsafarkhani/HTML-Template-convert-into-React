import React, { Component } from 'react'
import HomeAbout from './About/AboutUs/HomeAbout';
import NewsList from './PagesM/List/NewsList';


export default class List extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <NewsList></NewsList>
      </div>
    )
  }
}
