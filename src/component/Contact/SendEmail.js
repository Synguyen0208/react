import React, { Component } from 'react';
class SendEmail extends Component {
    render() {
        return ( <div>
            <form action="/action_page.php">
                <div className="form-group">
                <label htmlFor="usr">Email</label>
                <input type="text" className="form-control" id="usr" />
                </div>
                <div className="form-group">
                <label htmlFor="pwd">Password</label>
                <input type="password" className="form-control" id="pwd" />
                </div>
                    <div className="form-group">
                    <label htmlFor="comment">Write to us</label>
                    <textarea className="form-control" rows={5} id="comment" name="text" defaultValue={""} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            
          </div>
        );
    }
}
export default SendEmail;