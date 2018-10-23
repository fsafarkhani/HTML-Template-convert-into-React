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

            </switch>
            <Footer></Footer>

          </div>

        </Router>

      </div>
    );
  }
}

export default App;
