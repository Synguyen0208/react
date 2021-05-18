import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/price-range.css";
import axios from "axios";
import Category_tab from "../Content/category_tab";
import Card_detail from './card_detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import Comment from "../comment/Comment";
class Content_right_detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: null,
      data: []
    };
  }
  formDetail = () => {
    const formDetail = new FormData;
    formDetail.append('id', this.JSON.parse.id_pro.id);
    formDetail.append('phone', this.JSON.parse.id_pro.title);
    formDetail.append('image', this.JSON.parse.id_pro.image);
    formDetail.append('status', this.JSON.parse.id_pro.status);
    formDetail.append('name', this.JSON.parse.id_pro.name);
    formDetail.append('quantity', this.JSON.parse.id_pro.quantity);
    formDetail.append('price', this.JSON.parse.id_pro.price);

    return formDetail;
  }
  componentDidMount() {
    axios({
      method: 'GET',
      data: { text: "jjjj" },
      url: 'http://localhost/react-project/product.php',
      timeout: 4000,    // 4 seconds timeout          
    })
      .then(response => {
        this.setState({ data: response.data });
        console.log(response);
      })
    //   .catch(error => console.error('timeout exceeded'));
    //   console.log(this.props.match.params.id.split("=")[1]);
    //  this.setState({
    //     //  data:this.props.match.params.data.split("=")[1]
    //  }) 
  }
  render() {
    let data = null;
    this.state.data.map(element => {
      if (element.id == this.props.match.params.id.split("=")[1]) {
        data = <Card_detail
          // id={this.state.data[index].id}
          title={element.title}
          image={element.image}
          status={element.status}
          name={element.name}
          quantity={element.quantity}
          price={element.price}
          star="4" review="5"></Card_detail>
      }
    })
    let image=[];
    if(this.props.match.params.id.split("=")[1]=2){
      for(var i=1;i<6;i++){
        image.push(<img style={{marginTop:"7px"}} src={"/images/2/"+i+".jpg"}></img>)
      }
    }
    return (
      <div className="col-sm-12 padding-right">
        <div className="features_items">
          <br />
          <h2 className="title text-center">DETAIL PRODUCT</h2>
          <div className="row">
            {data}
          </div>
          {image
          }

          
          <Comment id_pro={this.props.match.params.id.split("=")[1]}/>


        </div>
        {/* <Category_tab /> */}
      </div>
    );
  }
}

export default Content_right_detail;