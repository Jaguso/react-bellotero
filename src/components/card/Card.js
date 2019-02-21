import React, { Component } from 'react';

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
    console.log(this.state.testimonialTrue)
  }


  render() {

    const reviews = (this.state.testimonialTrue ? this.props.reviewsOne : this.props.reviewsTwo)

    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <h3>{reviews.name}</h3>
            <small>{reviews.position}</small>
          </div>
          <div className="col">
            <p>"{reviews.comment}"</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col justify-content-end">
            <button onClick={this.handleClick}>-</button>
          </div>
          <div className="col">
            <button onClick={this.handleClick}>+</button>
          </div>
          <div className="col">
            <p>info</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;