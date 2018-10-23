import React, { Component } from 'react'
import HomeAbout from './About/AboutUs/HomeAbout';
import News from '../Component/News';
import Table from './PagesM/Pricing/Table';
import Contact from '../Component/Contact';

export default class d extends Component {
  render() {
    return (
      <div>
        <HomeAbout></HomeAbout>
        <Table></Table>
        <Contact></Contact>
        <News></News>

      </div>
    )
  }
}
