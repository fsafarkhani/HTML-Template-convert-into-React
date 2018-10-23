import React, { Component } from 'react'
import HomeProduct from './Shop/Product/HomeProduct';
import Cart1 from './Shop/Cart/Cart1';

export default class Cart extends Component {
  render() {
    return (
      <div>
        <HomeProduct></HomeProduct> 
        <Cart1></Cart1> 
      </div>
    )
  }
}
