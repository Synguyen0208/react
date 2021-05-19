import React, { Component } from 'react';
import '../css/Register.css';
// import $ from "jquery";
import Function from "../function";
import "../css/material-design-iconic-font.min.css";
import { Link } from 'react-router-dom';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:null,
            password:null
        }
    }
    createForm=()=>{
        const formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        formData.append('status', "login");
        return formData;
    }
    handleSubmit =(event)=>{
        let a=new Function();
        event.preventDefault();
        const form = this.createForm();
        a.Register(form);
        
        setTimeout(this.check, 1000);
    }
    check=()=>{
        if(JSON.parse(localStorage.getItem("code")==0))
                alert("Thông tin đăng nhập không đúng!");
        else{
            alert("Đăng nhập thành công!");
            localStorage.setItem("user", JSON.stringify(this.state));
        }
        
    }

    handleInputChange = (event) => {
        let value = event.target.value;

        let name = event.target.name;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div>
                {/* Sing in  Form */}
                <section className="sign-in">
                    <div className="container">
                        <div className="signin-content">
                            <div className="signin-image">
                                <figure><img src="images/signin-image.jpg" alt="sign up image" /></figure>
                                <Link to="/register" className="signup-image-link">Create an account</Link>
                            </div>
                            <div className="signin-form">
                                <h2 className="form-title">Sign In</h2>
                                <form className="register-form" onSubmit={this.handleSubmit} id="login-form">
                                    <div className="form-group">
                                        <label htmlFor="your_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                                        <input type="text" name="email" onChange={this.handleInputChange} id="your_name" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="your_pass"><i className="zmdi zmdi-lock" /></label>
                                        <input type="password" name="password" id="your_pass" onChange={this.handleInputChange} placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                        <label htmlFor="remember-me" className="label-agree-term"><span><span /></span>Remember me</label>
                                    </div>
                                    <div className="form-group form-button">
                                        <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Log in" />
                                    </div>
                                </form>
                                <div className="social-login">
                                    <span className="social-label">Or login with</span>
                                    <ul className="socials">
                                        <li><a href="#"><i style={{alignItems: "center"}} className="display-flex-center zmdi zmdi-facebook" /></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-twitter" /></a></li>
                                        <li><a href="#"><i className="display-flex-center zmdi zmdi-google" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default SignIn;