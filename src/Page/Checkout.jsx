import React, { Component } from 'react'
import HomeProduct from './Shop/Product/HomeProduct';
import Cart2 from './Shop/Checkout/Cart2';

export default class Checkout extends Component {
  render() {
    return (
      <div>
        <HomeProduct></HomeProduct>
        <Cart2></Cart2>
      </div>
    )
  }
}
