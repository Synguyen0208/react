import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      email:null,
      password:null
    }
  }
  hanleChange=(event)=>{
    var name=event.target.name;
    var val=event.target.value;
    this.setState({
      [nam]: val
  });
  }
  submit=()=>{
    const form=new FormData();
    form
  }
  render() {
    return (
      <div style={{backgroundColor:"#2196F3"}} id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                      <form onSubmit={this.submit}>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                          <input className="form-control py-4" onChange={this.hanleChange} id="inputEmailAddress" name="email" type="email" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputPassword">Password</label>
                          <input className="form-control py-4" id="inputPassword" onChange={this.hanleChange} name="password" type="password" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                            <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="/fogot">Forgot Password?</Link>
                          <button className="btn btn-primary" type="submit" name="login">Login</button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center">
                      <div className="small"><a href="register.php">Need an account? Sign up!</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

      </div>
    );
  }
}


export default Login;