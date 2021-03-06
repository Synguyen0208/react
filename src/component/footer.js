import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./css/style.css";
class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer">
                <div className="footer_grides">
                <div className="wrap">
                    <div className="footer_grid2" style={{padding:"0px"}}>
                        <h3>Location</h3>
                        <div className="map">
                            <iframe width="100%" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                                src="http://maps.google.co.in/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=spa+salon&amp;aq=4&amp;oq=spa&amp;sll=14.426112,79.975626&amp;sspn=0.11388,0.209255&amp;ie=UTF8&amp;hq=spa+salon&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=40.363419,-74.649653&amp;spn=0.071946,0.586428&amp;output=embed"></iframe><br /><small><a
                                    href="http://maps.google.co.in/maps?f=q&amp;source=embed&amp;hl=en&amp;geocode=&amp;q=spa+salon&amp;aq=4&amp;oq=spa&amp;sll=14.426112,79.975626&amp;sspn=0.11388,0.209255&amp;ie=UTF8&amp;hq=spa+salon&amp;hnear=&amp;radius=15000&amp;t=m&amp;ll=40.363419,-74.649653&amp;spn=0.071946,0.586428"
                                    style={{color:"#666", textAlign:"left",fontSize:"12px" }}/><a>View Larger Map</a></small>
                        </div>
                    </div>
                    <div className="footer_grid3">
                        <h3>Navigate</h3>
                        <div className="f_menu">
                            <ul>
                                <li className="active"><a href="index.html">Home</a></li>
                                <li><a href="about.html">About</a></li>
                                <li><a href="gallery.html">Gallery</a></li>
                                <li><a href="services.html">Blog</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_grid1">
                        <h3>Get In Touch</h3>
                        <div className="address">
                            <ul>
                                <li>Neque porro quisquam,</li>
                                <li>dolor sit amet,</li>
                                <li>USA.</li>
                                <li><span>E-mail :</span> www.yourcompany@gmail.com</li>
                                <li><span>Telephone :</span> +00 000 00000</li>
                                <li><span>Fax :</span> +00 000 00000</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_grid4">
                        <h3>Follow</h3>
                        <div className="social-icons">
                            <ul>
                                <li><a href="#" className="facebook">
                                        <span className="icon"> &nbsp;</span> <span className="inner"><strong>Facebook</strong> <br/>12,
                                            297</span>
                                    </a></li>
                                <li><a href="#" className="twitter">
                                        <span className="icon"> &nbsp;</span> <span className="inner"><strong>Twitter</strong> <br/>5,
                                            287</span>
                                    </a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </div>
        );
    }
}



export default Footer;