import React, { Component } from 'react'

export default class Cart2 extends Component {
  render() {
    return (
      <div>
        <section id="cart" className="cart">
  <div className="container">
    <table id="cart" className="table table-hover table-condensed">
      <thead>
        <tr>
          <th style={{width: '50%'}}>Product</th>
          <th style={{width: '10%'}}>Price</th>
          <th style={{width: '8%'}}>Quantity</th>
          <th style={{width: '22%'}} className="text-center">Subtotal</th>
          <th style={{width: '10%'}} />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
              <div className="col-sm-10 prod-desc">
                <h6 className="nomargin">Product 1</h6>
                <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </td>
          <td data-th="Price">$64.34</td>
          <td data-th="Quantity">
            <input type="number" className="form-control text-center" defaultValue={1} />
          </td>
          <td data-th="Subtotal" className="text-center">$64.34</td>
          <td className="actions" data-th>
            <button className="btn btn-info btn-sm"><i className="fa fa-refresh" /></button>
            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" /></button>                
          </td>
        </tr>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
              <div className="col-sm-10 prod-desc">
                <h6 className="nomargin">Product 2</h6>
                <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </td>
          <td data-th="Price">$34.12</td>
          <td data-th="Quantity">
            <input type="number" className="form-control text-center" defaultValue={1} />
          </td>
          <td data-th="Subtotal" className="text-center">$34.12</td>
          <td className="actions" data-th>
            <button className="btn btn-info btn-sm"><i className="fa fa-refresh" /></button>
            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" /></button>                
          </td>
        </tr>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
              <div className="col-sm-10 prod-desc">
                <h6 className="nomargin">Product 3</h6>
                <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </td>
          <td data-th="Price">$23.64</td>
          <td data-th="Quantity">
            <input type="number" className="form-control text-center" defaultValue={1} />
          </td>
          <td data-th="Subtotal" className="text-center">$23.64</td>
          <td className="actions" data-th>
            <button className="btn btn-info btn-sm"><i className="fa fa-refresh" /></button>
            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" /></button>                
          </td>
        </tr>
        <tr>
          <td data-th="Product">
            <div className="row">
              <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive" /></div>
              <div className="col-sm-10 prod-desc">
                <h6 className="nomargin">Product 4</h6>
                <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </td>
          <td data-th="Price">$21.32</td>
          <td data-th="Quantity">
            <input type="number" className="form-control text-center" defaultValue={1} />
          </td>
          <td data-th="Subtotal" className="text-center">$21.32</td>
          <td className="actions" data-th>
            <button className="btn btn-info btn-sm"><i className="fa fa-refresh" /></button>
            <button className="btn btn-danger btn-sm"><i className="fa fa-trash-o" /></button>                
          </td>
        </tr>
      </tbody>
      <tfoot> 
        <tr>
          <td><a href="#" className="btn btn-general btn-white"><i className="fa fa-angle-left" /> Continue Shopping</a></td>
          <td colSpan={2} className="hidden-xs" />
          <td className="hidden-xs text-center"><strong>Total $150.99</strong></td>
          <td><a href="#" className="btn btn-general btn-green">Checkout <i className="fa fa-angle-right" /></a></td>
        </tr>
      </tfoot>
    </table>
  </div>
</section>

      </div>
    )
  }
}
