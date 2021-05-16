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
                    <div>fffffff</div>
                </Route>
            </Switch>
            </div>
            </Router>
        );
    }
}
export default Home;
