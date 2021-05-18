import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from "./header/Header";
import Content from'./Content/content';
import Footer from './footer/footer';
import history from './history';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './account_admin/login';
import Forgot from './account_admin/forgot';
import Register from './account_admin/register';
import Confirm from './account_admin/confirm';
import Reset from './account_admin/reset';
import Product_detail from './detail/product-detail';
class Home extends Component {
    render() {
        return (
            <Router history={history}>
            <div>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Content/>
                    <Footer/>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/fogot">
                    <Forgot/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/confirm">
                    <Confirm/>
                </Route>
                <Route path="/reset">
                    <Reset/>
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}
export default Home;
