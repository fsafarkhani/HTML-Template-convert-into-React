import React, { Component } from 'react'
import HomeContact from './PagesM/ContactUS/HomeContact';
import Contact1 from './PagesM/ContactUS/Contact1';
import Contact2 from './PagesM/ContactUS/Contact2';
import Map from './PagesM/ContactUS/Map';

export default class ContactUS extends Component {
    render() {
        return (
            <div>
                <HomeContact></HomeContact>
                <Contact1></Contact1>
                <Contact2></Contact2>  
                <Map></Map>
                    </div>
        )
    }
}



