import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './Page/HomePage';
import Services from './Page/Services';
import AboutUs from './Page/About/AboutUs/AboutUs';





class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header></Header>
        <switch>

            <Route exact path="/"  component={HomePage} />
            <Route path="/Services" component={Services} />
            <Route path="/AboutUS" component={AboutUs} />


        </switch>
        <Contact></Contact>
        <Footer></Footer>

        </div>

      </Router>
 
      </div>
    );
  }
}

export default App;
