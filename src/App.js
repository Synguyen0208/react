// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



import React, { Component } from 'react';
import PropTypes from 'prop-types';
 import 'bootstrap/dist/css/bootstrap.min.css';

import  "./component/css/animate.css";
import  "./component/css/beauty.css";
import  "./component/css/main.css";
import  "./component/css/beauty.css";
import  "./component/css/price-range.css";
import  "./component/css/responsive.css";
import  "./component/css/font-awesome.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './component/Home';

import Content from './component/Content/content';
import Login from  './component/account_admin/login';
import Product_detail from './component/detail/product-detail';
class App extends Component {
    constructor(props) {
        super(props);

    } 

    render() {
        return (
            <div class="container">
			    <div class="row">
                <Home/>
                {/* <Product_detail/> */}
                {/* <Login/> */}
                </div>
            </div>
            
        );
    }
}


export default App;
