import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import Function from "../function";
class Cart extends Component {
    call=new Function();
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount(){
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/cart.php?email="thanh@gmail.com"',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ data: response.data });
                console.log(response.data);
            })
    }
    delete=(id_pro, id_cus)=>{
        const form=new FormData;
        form.append("id_pro",id_pro);
        form.append("id_cus",id_cus);
        form.append("status","delete");
        this.call.callAPI("http://localhost/react-project/cart.php", form, "POST");
        setTimeout(window.location.reload(),200);
    }
    change=(id_pro, id_cus, sign, quantity)=>{
        if(quantity-1==0){
            this.delete(id_pro, id_cus);
        }
        else{
            const form=new FormData;
            form.append("id_pro",id_pro);
            form.append("id_cus",id_cus);
            form.append("sign",sign);
            form.append("status","update");
            this.call.callAPI("http://localhost/react-project/cart.php", form, "POST");
            setTimeout(window.location.reload(),200);
        }
        
    }
    checkAll=()=>{
        if(document.getElementById("checkall").checked==true){
            this.state.data.map(e=>{
                document.getElementById(e.id).checked=true;
            })
        }
        else{
            this.state.data.map(e=>{
                document.getElementById(e.id).checked=false;
            })
        }

    }
    check=()=>{
        var check=0;
        this.state.data.map(e=>{
            if(document.getElementById(e.id).checked==false)
            check=1;
        })
        
        if(check==0)
        document.getElementById("checkall").checked=true;
        else
        document.getElementById("checkall").checked=false;
        
        
    }
    render() {
        return (
            <div class="container">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th><input id="checkall" onClick={this.checkAll} style={{backgroundColor:"orange"}} type="checkbox"></input></th>
                                <th>PRODUCT</th>
                                <th>DESCRIPTION</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>TOTAL</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        
                        <tbody class="text-center">
                            {this.state.data.length>0 && this.state.data.map(element=>{
                                return(
                                    <tr>
                                        <td><input onClick={this.check} type="checkbox" id={element.id}></input></td>
                                        <td><img src={element.image} style={{width:"5rem", height:"3rem"}}/><span style={{font:"arial", marginLeft:"5px"}}>{element.name}</span></td>
                                        <td>{element.title}</td>
                                        <td>{element.price}</td>
                                        <td><button onClick={()=>this.change(element.id_pro, element.id_cus, "minus", element.quantity)} style={{border:"none", fontSize:"1.5rem"}}>-</button>{element.quantity}<button onClick={()=>this.change(element.id_pro, element.id_cus, "plus")} style={{border:"none", fontSize:"1.5rem"}}>+</button></td>
                                        <td style={{color:"red"}}><sub>đ</sub>{element.price*element.quantity}</td>
                                        <td><button onClick={()=>this.delete(element.id_pro, element.id_cus)}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}


export default Cart;