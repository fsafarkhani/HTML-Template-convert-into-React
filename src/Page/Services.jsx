import React, { Component } from 'react'
import Bussiness from '../Page/Service/Bussiness';
import Financial1 from '../Page/Service/Financial1';
import Financial5 from '../Page/Service/Financial5';
import Home from '../Page/Service/Home' ;
import Financial6 from './Service/Financial6';
import News from '../Component/News';


export default class Services extends Component {
  render() {
    return (
      <div>
       <Home></Home>
      <Bussiness></Bussiness>
      <Financial1></Financial1>
       <Financial5></Financial5>
       <Financial6></Financial6>
       <News></News>
       
 
       
      </div>
    )
  }
}
