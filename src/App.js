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
