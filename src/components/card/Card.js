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
    const leftArrow = "<";
    const rightArrow = ">"

    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="name">{reviews.name}</h3>
            <small className="position">{reviews.position}</small>
          </div>  
          <div className="col">
            <p className="text">"{reviews.comment}"</p>
            <div className="btn-group">
              <button type="button" className="btn-fraction">{fraction}</button>
              <button type="button" className="btn-arrow" onClick={this.handleClick}>{leftArrow}</button>
              <button type="button" className="btn-arrow" onClick={this.handleClick}>{rightArrow}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;