import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "../css/card.css";
import { Link } from 'react-router-dom';
import Function from "../function";
class Card extends Component {
    call =new Function();
    constructor(props) {
        super(props);

    }
    item=()=>{
        let data=[];
        for (let index = 0; index < this.props.star; index++) {
            data.push(<i className="fa fa-star star"></i>);
        }
        console.log(data);
        return data;
    }
    addCart=()=>{
        const form=new FormData;
        form.append("id_pro", this.props.id);
        form.append("email", JSON.parse(localStorage.getItem("user")).email);
        form.append("status", "addcart");
        this.call.callAPI("http://localhost/react-project/cart.php", form, "POST");
    }
    render() {
        return (
            <div className="col-md-3 mt-2">
                
                <div className="card">
                <Link to={"/product/:id="+this.props.id}>
                    <div className="card-body">
                        <div className="card-img-actions"> <img style={{height:"8rem"}} src={this.props.image} className="card-img img-fluid" alt="" /> </div>
                    </div>
                    </Link>
                    <div className="card-body bg-light text-center">
                        <div className="mb-2">
                            <h6 className="font-weight-semibold mb-2"> <a href="#" className="text-default mb-2" data-abc="true">{this.props.name}</a> </h6> <a href="#" className="text-muted" data-abc="true"></a>
                        </div>
                        <h3 className="mb-0 font-weight-semibold"><sub>đ</sub>{this.props.price}</h3>
                        <div> 
                        {this.item()
                        }
                        </div>
                        <div className="text-muted mb-3">{this.props.review}</div> <button type="button" style={{backgroundColor:"yellow"}} onClick={this.addCart} className="btn bg-cart"><i className="fa fa-cart-plus mr-2"></i> Add to cart</button>
                    </div>
                </div>
                
            </div>
        );
    }
}



export default Card;