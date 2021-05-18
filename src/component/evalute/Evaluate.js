import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Evaluate extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };
    }

    onStarClick(nextValue, prevValue, name) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;

        return ( < div >
            <h4 style={{color:"rgb(50, 110, 82)"}}> Rate and submit your review of the product </h4> 
            <hr style={{color:"rgb(50, 110, 82)"}}></hr>
            <StarRatingComponent name = "rate1"
            starCount = { 5 }
            value = { rating }
            onStarClick = { this.onStarClick.bind(this) }
            />  
            </div>
        );
    }
}
export default Evaluate;