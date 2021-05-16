import React , {Component} from 'react';
import "./register.css";

class Register extends Component {
    render() {
        return (
            <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                        <div className="card-body">
                          <form method="post" acction>
                            <div className="form-group">
                              <label className="small mb-1" htmlFor="inputEmailAddress">Email</label>
                              <input className="form-control py-4" id="inputEmailAddress" name="email" type="email" aria-describedby="emailHelp" placeholder="Enter email address" required />
                            </div>
                            <div className="form-row">
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="small mb-1" htmlFor="inputPassword">Password</label>
                                  <input className="form-control py-4" id="inputPassword" name="password" type="password" placeholder="Enter password" required />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-group">
                                  <label className="small mb-1" htmlFor="inputConfirmPassword">Confirm Password</label>
                                  <input className="form-control py-4" id="inputConfirmPassword" name="confirm" type="password" placeholder="Confirm password" required />
                                </div>
                              </div>
                              <span style={{color: 'red', marginLeft: '1rem'}}>{/*?php echo $_SESSION['err']?*/}</span>
                            </div>
                            <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" type="submit" name="register">Create Account</button></div>
                          </form>
                        </div>
                        <div className="card-footer text-center">
                          <div className="small"><a href="login.php">Have an account? Go to login</a></div>
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

export default Register;