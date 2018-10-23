import React, { Component } from 'react'
import HomeShop from './Shop/ShopDetail/HomeShop';
import Shop1 from './Shop/ShopDetail/Shop1';

export default class ShopDetail extends Component {
  render() {
    return (
      <div>
        <HomeShop></HomeShop>
        <Shop1></Shop1>
      </div>
    )
  }
}
