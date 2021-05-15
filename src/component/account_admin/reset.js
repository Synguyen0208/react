import React , {Component} from 'react';
import "../css/register.css";

class Reset extends Component {
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
                              <label className="small mb-1" htmlFor="inputPassword">New Password</label>
                              <input className="form-control py-4" id="inputPassword" name="password" type="password" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                              <label className="small mb-1" htmlFor="inputPassword">Confirm New Password</label>
                              <input className="form-control py-4" id="inputPassword" name="confirm-password" type="password" placeholder="Enter password" />
                              <span style={{color: 'red'}}>{/*?php echo $_SESSION['err2']?*/}</span>
                            </div>
                            <div className="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                              <button className="btn btn-primary" type="submit" name="resetpassword">Reset password</button>
                            </div>
                          </form>
                        </div>
                        <div className="card-footer text-center">
                          <div className="small"><a href="login.php">Go to login page!</a></div>
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

export default Reset;