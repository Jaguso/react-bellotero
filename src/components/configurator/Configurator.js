import React, { Component } from 'react';
import {getPageTwo} from '../../services';
import Calculator from '../calculator/Calculator';
import './Configurator.css';

class Configurator extends Component {

  constructor() {
    super();
    this.state = {
      title: '',
      description: ''
    }
  }

  componentDidMount() {
    getPageTwo().then((response) => {
      this.setState({
        title: response.data.calculator.title,
        description: response.data.calculator.description
      })
      console.log(this.state.calculator)
    });
  }

  render() {
    return (
      <div className="container  my-container-two">
        <div className="row">
          <div className="col">
            <h3>{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
          <div className="col">
            <Calculator/>
          </div>

        </div>
      </div>
    );
  }
}

export default Configurator;