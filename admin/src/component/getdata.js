import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
class Getdata extends Component {
    static data=[];
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }

    componentWillMount() {

    }
    static get=()=>{
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/product.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                Getdata.data=response.data;
                // console.log(response.data);
            })
            .catch(error => console.error('timeout exceeded'));
    }
    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/product.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ data: response.data });
                // console.log(response.data);
            })
            .catch(error => console.error('timeout exceeded'));
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default Getdata;