import React, { Component } from 'react';
import './Card.css';

class Card extends Component {

  constructor() {
    super();
    this.state = {
      testimonialTrue: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){ 
    this.setState({
      testimonialTrue: !this.state.testimonialTrue 
    })
  }


  render() {

    const reviews = (this.state.testimonialTrue ? this.props.reviewsOne : this.props.reviewsTwo)
    const fraction = (this.state.testimonialTrue ? '1/2' : '2/2')

    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>{reviews.name}</h3>
            <small>{reviews.position}</small>
          </div>  
          <div className="col">
            <p>"{reviews.comment}"</p>
            <div className="btn-group">
              <button type="button" className="btn-fraction">{fraction}</button>
              <button type="button" className="btn-arrow" onClick={this.handleClick}>Left</button>
              <button type="button" className="btn-arrow" onClick={this.handleClick}>Right</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;