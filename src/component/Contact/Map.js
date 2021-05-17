import React, { Component } from 'react';
class Map extends Component {
    render() {
        return ( 
            <div className="container">
            <center>
            <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.1153128987517!2d108.23938341433666!3d16.059504843965456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142177e16d75991%3A0x711c915f162f6505!2zMTAxQiBMw6ogSOG7r3UgVHLDoWMsIEFuIEjhuqNpIMSQw7RuZywgU8ahbiBUcsOgLCDEkMOgIE7hurVuZyA1NTAwMDAsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1620783981249!5m2!1sen!2s"
            width = { 800 }
            height = { 350 }
            style = {
                { border: 0 } }
            allowFullScreen loading = "lazy" />
            </center>
            </div>
        );
    }
}
export default Map;