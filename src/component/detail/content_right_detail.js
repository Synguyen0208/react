import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/price-range.css";
import axios from "axios";
import Category_tab from "../Content/category_tab";
import Card_detail from './card_detail';
class Content_right_detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            data:[]
            // id:"",
            // title:"",
            // image:"",
            // status:"",
            // name:"",
            // quantity:"",
            // price:""

        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            data:{text:"jjjj"},
            url: 'http://localhost/react-project/product.php/',
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
      }
      item=()=>{
        let data=[];
        for (let index = 0; index < this.state.data.length; index++) {
            data.push(<Card_detail 
                title={this.state.data[index].title} 
                image={this.state.data[index].image}
                status={this.state.data[index].status} 
                name={this.state.data[index].name} 
                quantity={this.state.data[index].quantity}
                price={this.state.data[index].price} 
                star="4" review="5"></Card_detail>);
        }
        console.log(data);
        return data;
    }
    render() {
        return (
            <div className="col-sm-9 padding-right">
                <div className="features_items">
						<br/>
						<h2 className="title text-center">DETAIL PRODUCT</h2>
                    <div className="row">
                       {this.item()}
                    </div>
                </div>
                <Category_tab />
            </div>
          );
    }
}

export default Content_right_detail;