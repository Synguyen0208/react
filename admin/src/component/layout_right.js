import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/styles.css";
import Getdata from "./getdata";
import $ from "jquery";
// import "../css/dataTables.css";
import axios from "axios";
import Function from "./function";
import DataTables from "./dataTable";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Card from './card';
import Modal_Data from './modal_Data';

class Layout_right extends Component {
    data=[];
    a=new Function();
    constructor(props) {
        super(props);
        this.state={
            data:[],
            id:null,
            name_product: "",
            quantity_product: "null",
            price_product: "null",
            discount_price_product: "null",
            title: "null",
            ED: "null",
            MFG: "null",
            image: "null",
            mass_product: "null",
            categories: "null",
            company_name: "null",
            
            category: [],
            company: []
          
        }
    }

    componentWillMount() {
        Getdata.get();
        
    }
    click=(jj)=>{
        $("#con").show();
        alert(jj);
    }
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
        if(this.state.image!="null")
        formData.append('image-product', this.state.image);
        formData.append('company', this.state.company_name);
        
        return formData;
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
        });
    }
    delete=(id)=>{
        const formData = new FormData();
        formData.append('id', id);
        formData.append('method', "delete");
        this.a.Product(formData);
        setTimeout(()=>{
            if(JSON.parse(localStorage.getItem("code"))==0)
            alert("Dữ liệu bất đồng bộ!");
            else
            window.location.reload();
        }, 2000);
    }

    hideModal = () => {
        $("#myModal").hide();
        window.location.reload();
    };

    close=()=>{
        $("#con").hide();
        // alert(this.case);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const form = this.createForm();
        form.append("method", "POST");
        console.log(form);
        this.a.Product(form);
        setTimeout(()=>{
            if(JSON.parse(localStorage.getItem("code"))==0)
            alert("Dữ liệu bất đồng bộ!");
            else
            window.location.reload();
        }, 2000);
    }
    updateProduct=(event)=>{
        const form = this.createForm();
        
        form.append("method", "PUT");
        this.a.Product(form);
        setTimeout(()=>{
            if(JSON.parse(localStorage.getItem("code"))==0)
            alert("Dữ liệu bất đồng bộ!");
            else
            window.location.reload();
        }, 2000);
        event.preventDefault();
    }
    
    change=(id1)=>{
        this.setState({id:id1});
        this.state.data.map(element=>{
            if(element.id==id1){
                
                document.getElementById('name').value=element.name;
                // document.getElementById('idd').value=product[i]['id'];
                document.getElementById('title').value=element.title;
                console.log(element.title);
                document.getElementById('price').value=element.price;
                document.getElementById('discount').value=element.sell_price;
                // document.getElementById('image').value=product[i]['image'];
                document.getElementById('img').src=element.image;
                document.getElementById('quantity').value=parseInt(element.quantity);
                document.getElementById('MFG').value=element.MFG;
                document.getElementById('ED').value=element.ED;
                document.getElementById('mass').value=element.mass;
                // var e2 = document.getElementById("industry");
                // var a=e2.options[e.selectedIndex].value=element.industry;
                // var e = document.getElementById("company");
                // var r=e.options[e.selectedIndex].value=element.company;

                var key=Object.keys(this.state);
                console.log(key);
                var value=Object.values(element);
                console.log(value);
                for(var i=2;i<13;i++){
                    var set={};
                    set[key[i]]=value[i-1];
                    this.setState(set);
                }
            }
        })
        document.getElementById("myModal1").style.overflowX = "auto";
        document.getElementById("myModal1").style.overflowY = "auto";
        // $("#myModal1").toggle("modal");
        // $("#myModal1").modal="toggle";
        $("#myModal1").show();
    }
    componentDidMount() {
        axios({
            method: 'GET',
            data: { text: "jjjj" },
            url: 'http://localhost/react-project/product.php',
            //timeout: 4000, // 4 seconds timeout          
        })
            .then(response => {
                this.data=response.data;
                this.setState({ data: response.data });
                // console.log(response.data);
            })
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
            
    }
  
    render() {
        var table=null;
        if(this.state.data.length>0){
            table=<DataTables delete={this.delete} change={this.change} data={this.state.data}/>;
        }
        return (
            
            <div id="layoutSidenav_content">
                
                <main>
                    <div className="container-fluid">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        <div className="row">
                            
                            <Card name="Product management" color="#3366ff"/>
                            <Card name="Supply partner management" color="#6633cc"/>
                            <Card name="Account admin management" color="##660033"/>
                            <Card name="Account user management" color="#FF6666"/>
                            <Card name="Order management" color="#00CCCC"/>
                            <Card name="Shipping partners" color="#FF3333"/>
                        </div>
                        
                        <div class="card mb-4">
                        <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modal">Add product</button>
                        <Modal_Data typeIn="select" data={this.state.category}/>
                            <div class="card-header">
                                <i class="fas fa-table mr-1"></i>
                                DataTable product
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    {table}
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

                                        <select name="categories" id="industry1" onChange={this.handleInputChange}>
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
                                        <input type="number" min="0" name="mass_product" onChange={this.handleInputChange} id="mass1" placeholder="Nhập khối lượng sản phẩm" required /> <br />
                                        <label for=""> Ngày sản xuất </label> <input type="date" name="ED" id="" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Hạn sử dụng </label> <input type="date" name="MFG" id="" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Công ty sản xuất </label><br />
                                        <select name="company_name" id="company1" onChange={this.handleInputChange}> {
                                            this.state.company.map(element => {
                                                return (<option value={element.id} > { element.name} </option>
                                                )
                                            })
                                        }
                                        </select>
                                        <br />
                                        <input type="file" name="image" onChange={this.handleImage} required /><br />
                                        
                                        <span>

                                        </span><br />
                                        <label for=""> Mô tả sản phẩm </label><br />
                                        <textarea name="title" onChange={this.handleInputChange} id="title1" cols="30" rows="10" required> </textarea><br />
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


            <div id="myModal1" className="modal">
                <div className="modal-content">
                    <button onClick={this.hideModal}> <h3>Đóng</h3> </button>
                    <form onSubmit={this.updateProduct} enctype="multipart/form-data">
                        <div className="modal-header">
                            <h1> Thêm sản phẩm </h1></div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <label for=""> Nhập tên sản phẩm </label><br />
                                        <input type="text" id="name" name="name_product" onChange={this.handleInputChange} placeholder="Nhập tên sản phẩm" required /> <br />
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
                                                <input type="number" min="1" id="price" name="price_product" onChange={this.handleInputChange} placeholder="Nhập giá sản phẩm" required />
                                            </div>
                                            <div>
                                                <label for=""> Giá bán </label><br />
                                                <input type="number" id="discount" name="discount_price_product" onChange={this.handleInputChange} placeholder="Nhập giá bán" required />
                                            </div>
                                        </div>
                                        <label for=""> Số lượng sản phẩm </label><br />
                                        <input type="number" min="0" id="quantity" name="quantity_product" onChange={this.handleInputChange} placeholder="Nhập số lượng sản phẩm" required /> <br />
                                        <label for=""> Khối lượng sản phẩm </label><br />
                                        <input type="number" min="0" id="mass_product" name="mass" onChange={this.handleInputChange} id="mass" placeholder="Nhập khối lượng sản phẩm" required /> <br />
                                        <label for=""> Ngày sản xuất </label> <input type="date" name="ED" id="ED" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Hạn sử dụng </label> <input type="date" name="MFG" id="MFG" onChange={this.handleInputChange} required /> <br />
                                        <label for=""> Công ty sản xuất </label><br />
                                        <select name="company_name" id="company" onChange={this.handleInputChange}> {
                                            this.state.company.map(element => {
                                                return (<option value={element.id} > { element.name} </option>
                                                )
                                            })
                                        }
                                        </select>
                                        <br />
                                        <label for=""> Hình ảnh </label><br />
                                        <input type="file" name="image" onChange={this.handleImage} /><br />
                                        <img src="" id="img" style={{width: "6rem", height: "6rem"}}/><br/>
                                        <span>

                                        </span><br />
                                        <label for=""> Mô tả sản phẩm </label><br />
                                        <textarea name="title" id="title" onChange={this.handleInputChange} cols="30" rows="10" required></textarea><br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit"  style={{backgroundColor:"#007bff"}} id="add" value="add" className="btn btnprimary btn-lg" name="add">
                                Sửa Sản Phẩm </button> </div>
                    </form>
                </div>
                
            
            </div >
            </div>
            
        );
    }
}


export default Layout_right;