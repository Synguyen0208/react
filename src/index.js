import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './component/header/Header';
import Content from './component/Content/content';
import Footer from './component/footer/footer';
import reportWebVitals from './reportWebVitals';
import Product_detail from './component/detail/product-detail';
//import Register from './component/account_admin/register';
// import { Router } from 'react-router';
// import Login from './component/account_admin/login';
// import Forgot from './component/account_admin/forgot';
// import Confirm from './component/account_admin/confirm';
// import Reset from './component/account_admin/reset';
ReactDOM.render(
  <React.StrictMode>
    {/* <Register/> */}

     <Header />
    <Product_detail/>
    <Footer /> 
       
    {/* <Login/> */}
    {/* <Forgot/> */}
    {/* <Confirm/> */}
    {/* <Reset/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
