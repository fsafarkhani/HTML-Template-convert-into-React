import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Login from './Component/Login';
import Home from './Component/Home';
import About from './Component/About';
import Offer from './Component/Offer';
import WhatToDo from './Component/WhatToDo';
import Story from './Component/Story';
import Thought from './Component/Thought';
import Services from './Component/Services';
import Client from './Component/Client';
import Contact from './Component/Contact';
import News from './Component/News';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">


<Header></Header>
<Login></Login>
<Home></Home>
<About></About>
<Offer></Offer>
<WhatToDo></WhatToDo>
<Story></Story>
<Thought></Thought>
<Services></Services>
<Client></Client>
<Contact></Contact>
<News></News>
<Footer></Footer>
 
      </div>
    );
  }
}

export default App;
