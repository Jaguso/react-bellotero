import React, { Component } from 'react';
import Card from '../card/Card';
import {getPageOne} from '../../services';
import './Testimonial.css';

class Testimonial extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      reviewsOne: {},
      reviewsTwo: {}
    }
  }

  componentDidMount() {
    getPageOne().then((response) => {
      this.setState({
        title: response.data.slider.title,
        reviewsOne: response.data.slider.reviews[0],
        reviewsTwo: response.data.slider.reviews[1]
      })
    });
  }

  render() {
    return (
      <div className="container my-container">
        <div className="row rectangle">
          <h3 className="our-customers">{this.state.title}</h3>
        </div>
        <div className="row container">
          <Card
            reviewsOne={this.state.reviewsOne}
            reviewsTwo={this.state.reviewsTwo}
          />
        </div>
        <div className="row justify-content-center link-calc">
          <button type="button" className="btn btn-link"><a href="/calculator">Go to calculator</a></button>
        </div>

      </div>
    );
  }
}

export default Testimonial;