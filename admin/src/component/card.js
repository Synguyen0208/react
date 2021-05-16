import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="col-xl-3 col-md-6" >
            <div className="card bg-warning text-white mb-4" >
                <div className="card-body" style={{backgroundColor:this.props.color}}>{this.props.name}</div>
                <div className="card-footer d-flex align-items-center justify-content-between" style={{backgroundColor:this.props.color}}>
                    <a className="small text-white stretched-link" href="Pages/admin_company.php">View Details<sup><b style={{color: "white"}}></b></sup></a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div>
                           
        );
    }
}


export default Card;