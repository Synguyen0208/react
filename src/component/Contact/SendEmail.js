import React, { Component } from 'react';
class SendEmail extends Component {
    render() {
        return (
            <div>
                <form>
                    <p className="h4 text-center mb-4">Write to us</p>
                    <label htmlFor="defaultFormContactNameEx" className="grey-text">
                    Your name
                    </label>
                    <input type="text" id="defaultFormContactNameEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                    Your email
                    </label>
                    <input type="email" id="defaultFormContactEmailEx" className="form-control" />
                    <br />
                    <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                    Your message
                    </label>
                    <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
                    <br></br>
                    <center><button className="button" type="submit">Send</button></center>
                </form>
            </div>
        );
    }
}
