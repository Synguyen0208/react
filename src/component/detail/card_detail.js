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

            <div className="col-sm-9 padding-right">
                <div className="product-details">{/*product-details*/}
                    <div class="row">
                        <div className="col-sm-5">
                            <div className="view-product">
                                <img src={this.props.image} />
                                <h3>ZOOM</h3>
                            </div>
                            <div id="similar-product" className="carousel slide" data-ride="carousel">
                                {/* Wrapper for slides */}
                                <div className="carousel-inner">
                                    {/* <div className="item active">
                      <img src={this.props.image} />		
                      </div>
                      <div className="item">
                      <img src={this.props.image} />
                      </div>
                      <div className="item">
                      <img src={this.props.image} />	
                      </div> */}
                                </div>
                                {/* Controls */}
                                <a className="left item-control" href="#similar-product" data-slide="prev">
                                    <i className="fa fa-angle-left" />
                                </a>
                                <a className="right item-control" href="#similar-product" data-slide="next">
                                    <i className="fa fa-angle-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <div className="product-information">{/*/product-information*/}

                                {/* <img src="./images/7.jpg" className="newarrival" alt="" /><b/><b/> */}


                                <h2><input type="text" readOnly="true" name="name" defaultValue={this.props.title} /></h2>
                                <p>Web ID: 1089772</p>
                                <img src="images/product-details/rating.png" alt="" />
                                <span>
                                    <span>${this.props.price}</span>
                                    <label>Quantity:</label>
                                    <input type="text" readOnly="true" defaultValue={this.props.quantity} />
                                    <button type="button" className="btn btn-fefault cart">
                                        <i className="fa fa-shopping-cart" />
                        Add to cart
                      </button>
                                </span>
                                <p><b>Availability:</b> In Stock</p>
                                <p><b>Condition:</b>{this.props.status} </p>
                                <p><b>Brand:</b>{this.props.name} </p>
                                <a href><img src="images/product-details/share.png" className="share img-responsive" alt="" /></a>
                            </div>{/*/product-information*/}
                        </div>
                    </div>
                </div>{/*/product-details*/}


                <div className="category-tab shop-details-tab">{/*category-tab*/}
                    <div className="col-sm-12">
                        <ul className="nav nav-tabs">
                            <li><a href="#details" data-toggle="tab">Details</a></li>
                            <li><a href="#companyprofile" data-toggle="tab">Company Profile</a></li>
                            <li className="active"><a href="#reviews" data-toggle="tab">Reviews</a></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane fade" id="details">
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src="'.$r['image'].'" alt="Products" style={{ height: '150px' }} />
                                            <h2>{this.props.price}<sup>đ</sup></h2>
                                            <h4><b>{this.props.name}</b></h4>
                                            <a href="#" className="btn btn-default add-to-cart" style={{backgroundColor:"yellow"}}><i className="fa fa-shopping-cart" />Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>';

                        </div>
                        <div className="tab-pane fade" id="companyprofile">
                            <div className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src="'.$r['img'].'" alt="Products" style={{ height: '150px' }} />
                                            <h2>{this.props.manager}</h2>
                                            <h4><b>{this.props.manager}</b></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>';

                        </div>
                        <div className="tab-pane fade active in" id="reviews">
                            <div className="col-sm-12">
                                <p><b>Write Your Review</b></p>
                                <form method="post" action="review.php">
                                    <span>
                                        <input type="text" placeholder="Your Name" name="name" defaultValue="<?php echo $_SESSION['username'] ?>" />
                                        <input type="email" name="mail" defaultValue="<?php echo $_SESSION['email'] ?>" placeholder="Email Address" />
                                        <input type="hidden" name="id" defaultValue="<?php echo $data['id']; ?>" />
                                        <input type="hidden" name="account_id" defaultValue="<?php echo $_SESSION['id']; ?>" />
                                    </span>
                                    <textarea name="comm" defaultValue={""} />
                                    <b>Rating: </b> <img src="images/product-details/rating.png" alt="" />
                                    <button type="submit" name="comment" className="btn btn-default pull-right">
                                        Submit
                  </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>{/*/category-tab*/}
                <div className="recommended_items">{/*recommended_items*/}
                    <h2 className="title text-center">recommended products</h2>
                    <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="item active">

                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={this.props.image} alt="Products" style={{ height: '150px' }} />
                                                <h2>{this.props.price}<sup>đ</sup></h2>
                                                <h4><b>{this.props.name}</b></h4>
                                                <a href="#" className="btn btn-default add-to-cart" style={{backgroundColor:"yellow"}}><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>';
           
                            </div>
                            {/* <div className="item">
                                <div className="col-sm-4">
                                    <div className="product-image-wrapper">
                                        <div className="single-products">
                                            <div className="productinfo text-center">
                                                <img src={this.props.image} alt="Products" style={{ height: '150px' }} />
                                                <h2>{this.props.price}<sup>đ</sup></h2>
                                                <h4><b>{this.props.name}</b></h4>
                                                <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart" />Add to cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>'; */}

                            {/* </div> */}
                        </div>
                        <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                            <i className="fa fa-angle-left" />
                        </a>
                        <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                            <i className="fa fa-angle-right" />
                        </a>
                    </div>
                </div>{/*/recommended_items*/}
            </div>
            
        
        );
    }
}

export default Card_detail;