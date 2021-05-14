import React, { Component } from "react";
import CommentForm from './FormComponent';
import CommentList from './CommentList';
class AppComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: [],
            loading: false
        };
    }
    addComment(comment) {
        this.setState({
            loading: false,
            comments: [comment, ...this.state.comments]
        });
    }
    onSubmit(e) {
        // prevent default form submission
        e.preventDefault();

        if (!this.isFormValid()) {
            this.setState({ error: "All fields are required." });
            return;
        }

        // loading status and clear error
        this.setState({ error: "", loading: true });

        // persist the comments on server
        let { comment } = this.state;
        fetch("http://localhost:7777", {
                method: "post",
                body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    this.setState({ loading: false, error: res.error });
                } else {
                    // add time return from api and push comment to parent state
                    comment.time = res.time;
                    this.props.addComment(comment);

                    // clear the message box
                    this.setState({
                        loading: false,
                        comment: {...comment, message: "" }
                    });
                }
            })
            .catch(err => {
                this.setState({
                    error: "Something went wrong while submitting form.",
                    loading: false
                });
            });
    }

    isFormValid() {
        return this.state.comment.name !== "" && this.state.comment.message !== "";
    }
    componentDidMount() {
        // loading
        this.setState({ loading: true });

        // get all the comments
        fetch("http://localhost:7777")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    comments: res,
                    loading: false
                });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }
    render() {
        const loadingSpin = this.state.loading ? "App-logo Spin" : "App-logo";
        return ( <
            div className = "App container bg-light shadow" >
            <
            header className = "App-header" >

            <
            h1 className = "App-title" >
            React Comments <
            /h1> <
            /header>

            <
            div className = "row" >
            <
            div className = "col-4  pt-3 border-right" >
            <
            h6 > Say something about React < /h6> <
            CommentForm / >
            <
            /div> <
            div className = "col-8  pt-3 bg-white" >
            <
            CommentList / >
            <
            /div> <
            /div> <
            /div>
        );
    }
}
export default AppComment;