
import React,{Component} from 'react';
class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          description: '',
        };
      }
    render() {
        return (
            <div className="container">
                <br></br>
                <form>
                    <input type="text" ref="name" placeholder="Your Name" required/>
                    <br></br>
                    <br></br>
                    <textarea className="form-control" rows={5} id="comment" name="text" placeholder="Writr comment..." defaultValue={""} />
                    <br></br>
                    <button id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
                </form>
            </div>
            
        );
    }
}


export default componentName;
