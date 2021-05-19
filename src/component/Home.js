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
import Register from './component/Register/register';
import Confirm from './account_admin/confirm';
import Reset from './account_admin/reset';
import Product_detail from './detail/product-detail';
import Card from './Content/card';
import Cart from './Card/card';
import SignIn from './component/SignUp/SignIn';
import Blog from "./component/blog/blog"
class Home extends Component {
    render() {
        return (
            <Router history={history}>
            <div>
            <Switch>
                <Route exact path="/">
                    <Header/>
                    <Content/>
                    {/* <Route path="/blog" component={Blog} /> */}
                    <Footer/>
                </Route>
                <Route path="/login">
                    <SignIn />
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
                <Route path="/cart" component={Cart} />
            </Switch>
            </div>
            </Router>
        );
    }
}
export default Home;
