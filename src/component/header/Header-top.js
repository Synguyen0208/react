import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from "../Content/routes.js";
import Header from "./Header";
import Login from '../account_admin/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Product_detail from '../detail/product-detail.js';
class Header_top extends Component {
  constructor(props) {
    super(props);

  }
  showContent = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((router, index) => {
        return (<Route key={index}
          path={router.path}
          exact={router.exact}
          component={router.main} />);
      });
    }
    return result;
  };
  render() {
    return (
      
        <div class="header_wrapper">
          <div class="wrap">
            <div class="header_top">
              <div class="logo">
                <a href="index.html"><img src="images/logo.png" alt="" /></a>
              </div>
              <div class="menu">
                <ul>
                  <li><Link to="">Home</Link></li>
                  <li><Link to="/product">About Us</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/logout">logout</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  {/* <li><a href="contact.html">Contact</a></li> */}
                  <div class="clear"></div>
                </ul>
                <div>
                  {/* <Route exact path="/" component={Home} />  */}
                  {/* <Route path="/login" component={Login} />
            <Route path="/product_detail" component={Product_detail} /> */}
                </div>

              </div>
              <div class="clear"></div>
            </div>
          </div>

        </div>
    );
  }
}


export default Header_top;