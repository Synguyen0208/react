import React, { Component } from 'react';
import Map from './Map';
import SendEmail from './SendEmail';
import InformationContact from './InformationContact';
import './contact.css';
class Contact extends Component {
    render() {
        return ( 
            <div >
            <div className = "container" >
            <div className = "component1" >
            <Map />
            </div> 
            <div className = "component2" >
            <div className = "sendemail" >
            <SendEmail />
            </div> 
            <div className = "sendemail" >
            
            </div> 
            <div className = "informationcontact" >
            <InformationContact />
            </div> 
            </div> 
            </div> 
            </div>
        );
    }
}
export default Contact;