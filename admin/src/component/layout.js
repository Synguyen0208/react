import React, { Component } from 'react';
import PropTypes from 'prop-types';
import routes from "../router/routes";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout_left from "./layout_left";
import Layout_right from "./layout_right";
class Layout extends Component {
    constructor(props) {
        super(props);

    }
    cancel(){
        this.props.history.push('/employees');
    }
    componentWillMount() {

    }

    componentDidMount() {

    }


    render() {
        return (
            <Router>
                <div id="layoutSidenav">
                    <nav>
                    <Layout_left />
                    </nav>
                    <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          
          {routes.map(element=>{
              return(<Route path={element.path} exact={routes.exact} component={element.main} />

              )
              
          })}
        </Switch>
                </div>
            </Router>
        );
    }
}

function Home() {
    return <h2>Home</h2>;
  }
  
  function About() {
    return <h2>About</h2>;
  }
  
  function Users() {
    return <h2>Users</h2>;
  }

export default Layout;