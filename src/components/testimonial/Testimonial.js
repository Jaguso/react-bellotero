import React, { Component } from 'react';

import {getPageOne} from '../../services';

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
    })
  }

  render() {
    return (
      <div className="container">
        <div className="col">

        </div>
        <div className="col">

        </div>
        
      </div>
    );
  }
}

export default Testimonial;