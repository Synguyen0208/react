
import React,{Component} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Function from '../function';
import axios from "axios";
class componentName extends Component {
    call=new Function();
    constructor(props) {
        super(props);
        this.state = {
            data:[],
          comment: null,
          rating:1
        };
      }
    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }
    handleChange=(e)=>{
        var nam=e.target.name;
        var val=e.target.value;
        this.setState({
            [nam]:val
        });
    }
    componentDidMount(){
        axios({
            method: 'GET',
            data:{text:"jjjj"},
            url: 'http://localhost/react-project/review.php?id='+this.props.id_pro,
            timeout: 4000,    // 4 seconds timeout          
           })
           .then(response => {
             this.setState({data:response.data});
             console.log(response);
          })        
          .catch(error => console.error('timeout exceeded'));
    }
    submit=(e)=>{
        e.preventDefault();
        const form=new FormData;
        form.append("id_pro", this.props.id_pro);
        form.append("id_acc", "8");
        form.append("comment", this.state.comment);
        form.append("eva", this.state.rating);
        form.append("method", "comment");
        this.call.callAPI("http://localhost/react-project/product.php", form, "POST");
        setTimeout(window.location.reload(), 200);
    }
    render() {
        const { rating } = this.state;
        return (
            <div className="container">
                <br></br>
                < div >
                    <h4 style={{color:"rgb(50, 110, 82)"}}> Rate and submit your review of the product </h4> 
                    <hr style={{color:"rgb(50, 110, 82)"}}></hr>
                    <StarRatingComponent name = "rate1"
                    starCount = { 5 }
                    value = { rating }
                    onStarClick = { this.onStarClick.bind(this) }
                    />  
                </div>
                <form onSubmit={this.submit}>
                    <textarea className="form-control" rows={5} name="comment" id="comment" onChange={this.handleChange} placeholder="Write comment..." defaultValue={""} />
                    <br></br>
                    <button style={{backgroundColor:"#326e52"}} id="submit" type="submit" className="button button-outline comment-button action-button expand-right">Add Comment</button>
                </form>
                {
                this.state.data.length>0 && this.state.data.map(element=>{
                    return(<div>
                                <div style={{display:"flex"}}>
                                <StarRatingComponent name = "rate1"
                                starCount = { 5 }
                                value = { element.evaluate }
                                /> 
                                <span>{element.user}</span>
                                </div>
                                <h6>{element.review}</h6>
                            </div>
                    )
                })}
                
            </div>
            
        );
    }
}


export default componentName;
