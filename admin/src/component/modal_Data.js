import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal_Data extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                hh
                {this.props.typeIn == "select" &&
                    <div>
                        <label for="">{this.props.title}</label><br />
                        <select name="categories" id="industry" >
                            {
                                this.props.data.map(element => {
                                    return (<option value={element.id}> { element.industry} </option>)
                                })
                            }
                        </select><br />
                    </div>
                }
                {
                    this.props.typeIn == "image" &&
                    <div>
                        <label for=""> Hình ảnh </label><br />
                        <input type="file" name="image" /><br />
                    </div>
                }
                {
                    this.props.typeIn == "textarea" &&
                    <div>
                        <label for=""> {this.props.title} </label><br />
                        <textarea name={this.props.name} id={this.props.id} cols="30" rows="10"
                            required></textarea><br />
                    </div>
                }
                {
                    <div>
                        <label for="">  </label><br />
                        <input type={this.props.typeIn} id={this.props.id} name={this.props.name}
                            required />
                    </div>
                }

            </div>
        );
    }
}


export default Modal_Data;