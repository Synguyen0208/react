import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './component/Header';
import Content from './component/content';
import Footer from './component/footer';
import Evaluate from './component/evalute/Evaluate';
import Contact from './component/Contact/Contact';
import Comment from './component/comment/Comment';
//import AppComment from './component/comment/AppComment';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( 
    <React.StrictMode >
    <Header />
    <Content />
    <Footer />
    <Evaluate />
    <Contact/>
    <Comment/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();