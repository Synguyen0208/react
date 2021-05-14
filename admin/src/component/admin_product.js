import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import $ from "jquery";
import Function from "./function";
class admin_product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:62,
            name_product: "",
            categories: "null",
            price_product: "null",
            discount_price_product: "null",
            quantity_product: "null",
            mass_product: "null",
            ED: "null",
            MFG: "null",
            image: "null",
            company_name: "null",
            title: "null",
            category: [],
            company: []
        }
        this.handleInputChangeChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        let value = event.target.value;

        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    handleImage = (event) => {

        this.setState({
            image: event.target.files[0]
        })

    }
    hideModal = () => {
        $("#myModal").hide();
        window.location.reload();
    };

    createForm=()=>{
        const formData = new FormData();
        formData.append('name-product', this.state.name_product);
        formData.append('category', this.state.categories);
        formData.append('id', this.state.id);
        formData.append('price-product', this.state.price_product);
        formData.append('discount', this.state.discount_price_product);
        formData.append('quantity', this.state.quantity_product);
        formData.append('mass', this.state.mass_product);
        formData.append('ED', this.state.ED);
        formData.append('MFG', this.state.MFG);
        formData.append('title', this.state.title);
        formData.append('image-product', this.state.image);
        formData.append('company', this.state.company_name);
        
        return formData;
    }
    updateProduct=(event)=>{
        event.preventDefault();
        const form = this.createForm();
        form.append("method", "PUT");
        console.log(form);
        Function.Product(form);
    }
    delete=()=>{
        const formData = new FormData();
        formData.append("method", "delete");
        formData.append('id', this.state.id);
        Function.callAPI('http://localhost/react-project/product.php', formData, "POST");
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.createForm();
        form.append("method", "POST");
        console.log(form);
        Function.Product(form);
    }

    componentWillMount() {

    }

    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/category.php',
            timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ category: response.data });
                console.log(response);
            })
            .catch(error => console.error('timeout exceeded'));
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/company.php',
            timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.setState({ company: response.data });
                console.log(response);
            })
            .catch(error => console.error('timeout exceeded'));
    }



    render() {
        return (<div>
            <button style={{ marginTop: "50px" }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" onClick={this.delete} data-target="#myModal"> Add product </button>
            <div id="myModal" style={{ display: "none" }} className="modal">
                <div className="modal-content">
                    <button onClick={this.hideModal}> <h3>Đóng</h3> </button>
                    <form onSubmit={this.handleSubmit} id="form" enctype="multipart/form-data">
                        <div className="modal-header">
                            <h1> Thêm sản phẩm </h1></div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label for=""> Nhập tên sản phẩm </label><br />
                                        <input type="text" name="name_product" onChange={this.handleInputChange} placeholder="Nhập tên sản phẩm" required /> <br />
                                        <label for=""> Danh mục sản phẩm </label><br />

                                        <select name="categories" id="industry" onChange={this.handleInputChange}>
                                            {
                                                this.state.category.map(element => {
                                                    return (<option value={element.id} > { element.industry} </option>)
                                                })
                                            }
                                        </select><br />
                                        <div className="in_price">
                                            <div>
                                                <label for=""> Giá nhập sản phẩm </label><br />
                                                <input type="number" min="1" name="price_product" onChange={this.handleInputChange} placeholder="Nhập giá sản phẩm" required />
                                            </div>
                                            <div>
                                                <label for=""> Giá bán </label><br />
                                                <input type="number" name="discount_price_product" onChange={this.handleInputChange} placeholder="Nhập giá bán" required />
                                            </div>
                                        </div>
                                        <label for=""> Số lượng sản phẩm </label><br />
                                        <input type="number" min="0" name="quantity_product" onChange={this.handleInputChange} placeholder="Nhập số lượng sản phẩm" required /> <br />
                                        <label for=""> Khối lượng sản phẩm </label><br />
                                        <input type="number" min="0" name="mass_product" onChange={this.handleInputChange} id="mass" placeholder="Nhập khối lượng sản phẩm" required /> <br />
                                        <label for=""> Ngày sản xuất </label> <input type="date" name="ED" id="" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Hạn sử dụng </label> <input type="date" name="MFG" id="" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Công ty sản xuất </label><br />
                                        <select name="company_name" id="company" onChange={this.handleInputChange}> {
                                            this.state.company.map(element => {
                                                return (<option value={element.id} > { element.name} </option>
                                                )
                                            })
                                        }
                                        </select>
                                        <br />
                                        <input type="file" name="image" onChange={this.handleImage} /><br />
                                        <span>

                                        </span><br />
                                        <label for=""> Mô tả sản phẩm </label><br />
                                        <textarea name="title" onChange={this.handleInputChange} id="" cols="30" rows="10" required> </textarea><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" style={{backgroundColor:"#007bff"}} id="add" value="add" className="btn btnprimary btn-lg" name="add">
                                Thêm Sản Phẩm </button> </div>
                    </form>
                </div>
            </div >
        </div >
        );
    }
}

export default admin_product;