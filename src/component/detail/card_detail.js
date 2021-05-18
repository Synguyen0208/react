import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/card.css";
class Card_detail extends Component {
    constructor(props) {
        super(props);

    }
    item = () => {
        let data = [];
        for (let index = 0; index < this.props.star; index++) {
            data.push(<i className="fa fa-star star"></i>);
        }
        console.log(data);
        return data;
    }
    render() {

        return (

            <div className="col-sm-12 padding-right">
                <div className="product-details">{/*product-details*/}
                    <div class="row">
                        <div className="col-sm-5">
                            <div className="view-product">
                                <img src={this.props.image} />
                                <h3>ZOOM</h3>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="product-information">{/*/product-information*/}

                                {/* <img src="./images/7.jpg" className="newarrival" alt="" /><b/><b/> */}


                                <h2>{this.props.title}</h2>
                                <img src="images/product-details/rating.png" alt="" />
                                <span>
                                    <span>${this.props.price}</span>
                                    {/* <label>Quantity:</label> */}
                                    {/* <input type="text" readOnly="true" defaultValue={this.props.quantity} /> */}
                                </span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b>{this.props.status} </p>
                                <p><b>Brand:</b>{this.props.name} </p>
                                <a href><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
                                
                            </div>{/*/product-information*/}
                            <div style={{display:"flex"}}>
                            <button type="button" style={{backgroundColor:"#ff6600"}} className="btn btn-fefault cart">
                                <i className="fa fa-shopping-cart" />
                                        Add to cart
                                </button>
                                <button type="button" style={{backgroundColor:"#ff6600"}} className="btn btn-fefault cart">
                                <i className="fa fa-shopping-cart" />
                                        Mua ngay
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>{/*/product-details*/}
            </div>
            
        
        );
    }
}

export default Card_detail;