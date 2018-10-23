import React, { Component } from 'react'
import HomeProduct from './Shop/Product/HomeProduct';
import Form from './Shop/Account/Form';

export default class Account extends Component {
  render() {
    return (
      <div>
        <HomeProduct></HomeProduct>
        <Form></Form>
      </div>
    )
  }
}
