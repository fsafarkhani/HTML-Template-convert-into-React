import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './Page/HomePage';
import Services from './Page/Services';
import AboutUs from './Page/About/AboutUs/AboutUs';
import Login from './Component/Login';
import Careers from './Page/Careers';
import Faq from './Page/Faq';
import Team from './Page/Team';
import Testimonials from './Page/Testimonials';
import ShopDetail from './Page/ShopDetail';
import Account from './Page/Account';
import Product from './Page/Product';
import Cart from './Page/Cart';
import Checkout from './Page/Checkout';
import ContactUS from './Page/ContactUS';
import List from './Page/List';
import Grid from './Page/Grid';
import PagesDetail from './Page/PagesDetail';
import Project from './Page/Project';
import Pricing from './Page/Pricing';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Login></Login>
            <Header></Header>
            <switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/Services" component={Services} />
              <Route path="/AboutUS" component={AboutUs} />
              <Route path="/Careers" component={Careers} />
              <Route path="/Faq" component={Faq} />
              <Route path="/Team" component={Team} />
              <Route path="/Testimonials" component={Testimonials} />
              <Route path="/ShopDetail" component={ShopDetail} />
              <Route path="/Account" component={Account} />
              <Route path="/Cart" component={Cart} />
              <Route path="/Checkout" component={Checkout} /> 
              <Route path="/Product" component={Product} /> 
              <Route path="/ContactUS" component={ContactUS} /> 
              <Route path="/List" component={List} /> 
              <Route path="/Grid" component={Grid} /> 
              <Route path="/PagesDetail" component={PagesDetail} /> 
              <Route path="/Project" component={Project} /> 
              <Route path="/Pricing" component={Pricing} /> 



            </switch>
            <Footer></Footer>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;
