import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
class Function{
    static callAPI=(urlAPI, data1, method)=>{
        var headers = {
            'Content-Type': 'application/json'
        }
        let datar=[];
        axios({
            method: method,
            data:data1,
            headers:headers,
            url: urlAPI    // 4 seconds timeout          
           })
           .then(response => {
               localStorage.setItem("code", response.data);
               console.log(response.data);
          })        
          .catch( console.log("sorry"));
          
        
    }
    static Product=(formData)=>{
       if(Function.callAPI('http://localhost/react-project/product.php', formData, "POST")!="False")
       window.location.reload();
       ;
    }
    static Register=(formData)=>{
        Function.callAPI('http://localhost/react-project/account.php', formData, "POST")
    }
    

}


export default Function;