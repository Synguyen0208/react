import React , {Component} from 'react';
import "../css/register.css";

class Login extends Component {
    render() {
        return (

<div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                    <div className="card-body">
                      <form method="post" acction>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                          <input className="form-control py-4" id="inputEmailAddress" name="email" type="email" placeholder="Enter email address" />
                        </div>
                        <div className="form-group">
                          <label className="small mb-1" htmlFor="inputPassword">Password</label>
                          <input className="form-control py-4" id="inputPassword" name="password" type="password" placeholder="Enter password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                            <label className="custom-control-label" htmlFor="rememberPasswordCheck">Remember password</label>
                          </div>
                        </div>
                        <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="forgot.php">Forgot Password?</a>
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
        <div id="layoutAuthentication_footer">
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2020</div>
                <div>
                  <a href="#">Privacy Policy</a>
                  ·
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
}
}

export default Login;