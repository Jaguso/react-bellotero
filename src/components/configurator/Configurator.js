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
    });
  }

  render() {
    

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-configurator">
              <h3>{this.state.title}</h3>
            </div>
            <div className="text-configurator">
              <p>{this.state.description}</p>
            </div>
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