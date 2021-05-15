
//******************************************

class CommentBox extends React.Component {
  
  constructor (props) {
  	super(props);
    this.state = {comments : []};
  }
  
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(resp) {
        this.setState({comments: resp});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    }); 
  }
  
  handleCommentSubmit(newComment) {
    let comments = this.state.comments;
    let newComments = comments.concat([newComment]);
    this.setState({comments : newComments});
  }
  
  render() {
    return (
      <div className="container">
        <div className="commentBox panel panel-default">
          <div className="panel-body">
            <h1>Comment Box</h1>
            <CommentList comments={this.state.comments} />
            <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
  
}

//******************************************

class CommentList extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    let commentNodes = this.props.comments.map(function(comment, index) {
      return (<Comment key={index} author={comment.author}>{comment.text}</Comment>);
    });
    return (<div className="commentList">{commentNodes}</div>);
  }
  
}

//******************************************

class Comment extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
     <div className="comment panel panel-default">
        <div className="panel-heading">
          <h4>{this.props.author}</h4>
        </div>
        <div className="panel-body">
          {this.props.children}
        </div>
      </div>
    );
  }

}

//******************************************

class CommentForm extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  handleSubmit(e) {
    e.preventDefault();
    let author = React.findDOMNode(this.refs.author).value.trim();
    let text = React.findDOMNode(this.refs.text).value.trim();
    if(!text || !author) {
      alert("Please enter your name and comment");
      return;
    }
    this.props.onCommentSubmit({author:author, text:text});
    React.findDOMNode(this.refs.author).value = "";      
    React.findDOMNode(this.refs.text).value = "";
    React.findDOMNode(this.refs.author).focus();
  }
  
  render() {
    return (
      <div className="commentForm panel panel-default">
        <div className="panel-body">
          <form className="form" onSubmit={this.handleSubmit.bind(this)}>
            <input className="form-control" type="text" placeholder="Your name" ref="author" /><br/>
            <input className="form-control" type="text" placeholder="Say somthing here..." ref="text" /><br/>
            <input className="btn btn-default" type="submit" value="Post" />
          </form>
        </div>
      </div>
    );
  }

}

//******************************************

React.render(<CommentBox url="data.json" />,
document.getElementById("content"));
  
//******************************************

