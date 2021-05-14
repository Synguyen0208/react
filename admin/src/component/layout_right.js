import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import { useHistory } from "react-router-dom";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Layout_right extends Component {
    // history = useHistory();
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }
    
    
    render() {
        return (
            <Router>
            <div id="layoutSidenav_content">
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">Add product</button>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Product management</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="Pages/admin_product.php">View Details <sup><b style={{color: "white"}}></b></sup></a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Supply partner management</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="Pages/admin_company.php">View Details<sup><b style={{color: "white"}}></b></sup></a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">Account admin management</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="Pages/account_admin.php">View Details<sup><b style={{color: "white"}}></b></sup></a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" >
                                <div className="card bg-danger text-white mb-4" style={{backgroundColor: "gray", border: "1px solid gray"}}>
                                    <div className="card-body" style={{backgroundColor: "gray"}}>Account user management</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between" style={{backgroundColor: "gray"}}>
                                        <a className="small text-white stretched-link" href="Pages/account_user.php">View Details<sup><b style={{color: "white"}}></b></sup></a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4" style={{backgroundColor: "black", border: "1px solid black"}}>
                                    <div className="card-body" style={{backgroundColor: "black"}}>Order management</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between" style={{backgroundColor: "black"}}>
                                        <a className="small text-white stretched-link" href="Pages/order_manager.php">View Details<sup><b style={{color: "white"}}></b></sup></a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4" style={{backgroundColor: "gray", border: "1px solid white"}}>
                                    <div className="card-body" style={{backgroundColor: "gray"}}>Shipping partners</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between" style={{backgroundColor: "gary"}}>
                                        <a className="small text-white stretched-link"><Link to="/about">View Details</Link><sup><b style={{color: "white"}}></b></sup></a>
                                        
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <button >ffffdf</button>
                        </div>
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area mr-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body">
                                    <iframe width="100%" height="300" src="https://www.youtube.com/embed/Rk-ufKSPYco?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-bar mr-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myBarChart" width="100%" height="63.5px"></canvas></div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table mr-1"></i>
                                DataTable Example
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
            </Router>
        );
    }
}


export default Layout_right;