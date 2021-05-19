import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../css/animate.css";
import  "../css/beauty.css";
import  "../css/main.css";
import  "../css/beauty.css";
import  "../css/price-range.css";
import  "../css/responsive.css";
import  "../css/font-awesome.min.css";
import Content_left from "./content_left";
import Content_right from "./content_right";
import Blog from "../component/blog/blog"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    Link
  } from "react-router-dom";
import Login from '../account_admin/login';
import Content_right_detail from '../detail/content_right_detail';
import Card from './card';
import Cart from '../Card/card';
class Content extends Component {
    constructor(props) {
        super(props);

    } 

    render() {
        return (
            <Router>
            <div class="container">
			    <div class="row">
                    
                    <Switch>
                <Route exact path="/">
                <Content_left/>
                <Content_right/>
                </Route>
                <Route path="/product/:id" component={Content_right_detail} />
                <Route path="/blog" component={Blog} />
                
            </Switch>
                    
                </div>
            </div>
            </Router>
            
        );
    }
}


export default Content;