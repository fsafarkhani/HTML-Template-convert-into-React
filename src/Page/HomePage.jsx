import React, { Component } from 'react'
import Login from '../Component/Login';
import Home from '../Component/Home';
import About from '../Component/About';
import Offer from '../Component/Offer';
import WhatToDo from '../Component/WhatToDo';
import Story from '../Component/Story';
import Thought from '../Component/Thought';
import Services from '../Component/Services';
import Client from '../Component/Client';
import News from '../Component/News';
import Contact from '../Component/Contact';



export default class HomePage extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}
