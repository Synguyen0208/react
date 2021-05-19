import React, { Component } from 'react';
import "./blog.css"
class Blog extends Component {
    render() {
        return (
            <div>
              <div className="header">
                <h1>Blog Product</h1>
              </div>
              <div className="row">
                <div className="leftcolumn">
                  <div className="card">
                    <h2>LATEST FROM OUR BLOG</h2>
                    <h5> Dec 7, 2021</h5>
                    <div className="fakeimg" style={{height: '200px'}}><img src="./images/anh4.png" alt="" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                  <div className="card">
                    <h2>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
                    <h5> Sep 2, 2021</h5>
                    <div className="fakeimg" style={{height: '200px'}}><img src="./images/anh5.png" alt="" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                  <div className="card">
                    <h2>GIRLS PINK T SHIRT ARRIVED IN STORE</h2>
                    <h5> Sep 2, 2021</h5>
                    <div className="fakeimg" style={{height: '200px'}}><img src="./images/anh7.png" alt="" /></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                 
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                  </div>
                </div>
                <div className="rightcolumn">
                  <div className="card">
                    <h2>About Me</h2>
                    <div className="fakeimg"><img src="./images/anh6.png" alt="" /></div><br />
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.</p>
                  </div>
                  <div className="card">
                    <h2>Popular Post</h2>
                    <div className="fakeimg"><img src="./images/anh1.png" alt="" /></div><br />
                    <div className="fakeimg"><img src="./images/anh2.png" alt="" /></div><br />
                    <div className="fakeimg"><img src="./images/anh3.png" alt="" /></div>
                  </div>
                  <div className="card">
                    <h2 className="fl">Follow Me</h2>
                    <p>Cosmetics are constituted from a mixture of chemical compounds derived from either natural sources or synthetically created ones.[1] Cosmetics designed for skin care can be used to cleanse, exfoliate and protect the skin, as well as replenishing it, through the use of cleansers, toners, serums, moisturizers, and balms; cosmetics designed for more general personal care, such as shampoo and body wash, can be used to cleanse the body; cosmetics designed to enhance one's appearance .</p>
                  </div>
                </div>
              </div>
            </div>
          );
    }
}

export default Blog;