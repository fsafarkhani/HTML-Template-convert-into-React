import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Contact from './Component/Contact';
import News from './Component/News';
import Footer from './Component/Footer';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from './Page/HomePage';
import AboutPage from './Page/About/AboutPage';
import Career from './Page/About/Career';
import Team from './Page/About/Team';
import Faq from './Page/About/Faq';
import Testimonials from './Page/About/Testimonials';






class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header></Header>
        <switch>
            <Route exact path="/"  component={HomePage} />
            <Route path="/About" component={AboutPage} />
            <Route path="/Career" component={Career} />
            <Route path="/Team" component={Team} />
            <Route path="/Faq" component={Faq} />
            <Route path="/Testimonials" component={Testimonials} />

        </switch>
        <Contact></Contact>
        <News></News>
        <Footer></Footer>
        </div>
      </Router>
 
      </div>
    );
  }
}

export default App;
