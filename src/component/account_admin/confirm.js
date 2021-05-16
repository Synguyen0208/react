import React , {Component} from 'react';
import "./register.css";

class Confirm extends Component {
    render() {
        return (

            <div id="layoutAuthentication">
            <div id="layoutAuthentication_content">
              <main>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-7">
                      <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Confirm Account</h3></div>
                        <div className="card-body">
                          <form method="post" acction>
                            <div className="form-row">
                              <div className="col-md-12">
                                <div className="form-group">
                                  <label className="small mb-1" htmlFor="inputPassword">Enter your code to confirm your account!</label>
                                  <input className="form-control py-4" id="inputPassword" name="code" type="number" placeholder="Enter code" required />
                                </div>
                              </div>
                              <span style={{color: 'red', marginLeft: '1rem'}}>{/*?php echo $_SESSION['errcode']?*/}</span>
                            </div>
                            <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" type="submit" name="confirm">Send</button></div>
                          </form>
                        </div>
                        <div className="card-footer text-center">
                          <div className="small"><a href="register.php">Go to create account</a></div>
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

export default Confirm;