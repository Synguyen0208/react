import React , {Component} from 'react';
import "../css/register.css";

class Forgot extends Component {
    render() {
        return (

            <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-5">
                      <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                        <div className="card-body">
                          <div className="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                          <form action method="post">
                            <div className="form-group">
                              <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                              <input className="form-control py-4" id="inputEmailAddress" name="email" type="email" aria-describedby="emailHelp" placeholder="Enter email address" />
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                              <a className="small" href="login.php">Return to login</a>
                              <button className="btn btn-primary" name="reset">Reset password</button>
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

export default Forgot;