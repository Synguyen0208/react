import React, { Component } from 'react';
import "./css/search.css";
class Search extends Component {
    render() {
        return (
            <div className="search">
                <br></br>
                <div className="flexbox">
        <div className="search">
          <div>
            <input type="text" placeholder="Search . . ." required />
            <button type="submit"><i class="fa fa-search"></i></button>
          </div>
        </div>
      </div>
        <div style={{paddingLeft: '16px'}}>
        </div>
      </div>
        );
    }
}
export default Search;