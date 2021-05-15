import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Content_left from "../Content/content_left";
import Content_right_detail from'./content_right_detail';
class Product_detail extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="container">
            <div class="row">
                <Content_left/>
                <Content_right_detail/>
            </div>
        </div>
        );
    }
}

export default Product_detail;