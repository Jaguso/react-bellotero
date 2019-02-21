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
      console.log(response.data)
      console.log(response.data.slider)
    });
  }

  render() {
    return (
      <div className="container my-container">
        <div className="row">
          <h3>{this.state.title}</h3>
        </div>
        <div className="row">
          <Card
            reviewsOne={this.state.reviewsOne}
            reviewsTwo={this.state.reviewsTwo}
          />
        </div>

      </div>
    );
  }
}

export default Testimonial;