import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content_left from "../Content/content_left";
import Content_right_detail from'./content_right_detail';
import Footer from '../footer/footer';
import { ModalFooter } from 'react-bootstrap';
import Header_bottom from '../header/Header_bottom';
import Header from '../header/Header';
class Product_detail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            
            <div>
                <Header/>
                <Content_left/>
                <Content_right_detail/>
                <Footer/>
          
            </div>
       
        );
    }
}

export default Product_detail;