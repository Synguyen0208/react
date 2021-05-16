import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
class DataTables extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        var keye=Object.keys(this.props.data[0]);
        console.log(this.props.change);
        return (
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                            <tr>
                                                {keye.map(element=>{
                                                    return(<th>{element}</th>)
                                                })}
                                                <th></th>
                                            </tr>
                                            
                                        </thead>
                                        <tfoot>
                                            <tr>
                                            {keye.map(element=>{
                                                    return(<th>{element}</th>)
                                                })}
                                                <th></th>
                                            </tr>
                                            
                                            
                                        </tfoot>
                                        <tbody>
                                            {this.props.data.map(value=>{
                                                return(<tr>
                                                    {Object.values(value).map((value, key)=>{
                                                        if(keye[key]=="image")
                                                        return <td><img style={{width:"4rem", height:"5rem"}} src={value}></img></td>
                                                    return <td>{value}</td>
                                                })
                                                }
                                                <button name="add" onClick={()=>this.props.change(value.id)}><img src="https://taiwebs.com/upload/icons/systemmodeler.png" style={{width:"2rem"}}></img></button>
                                                        
                                                <button type="submit" onClick={()=>this.props.delete(value.id)} name="delete"><img src="https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-line/254000/82-512.png" style={{width: "2rem", height: "2rem"}} alt=""/></button>
                                                </tr>)
                                            })}
                                                
                                        </tbody>
                                        </table>
        );
    }
}


export default DataTables;