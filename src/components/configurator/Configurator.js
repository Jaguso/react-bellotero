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
    const titleLineOne = this.state.title.split(' ').slice(0, -1).join(' ')
    const titleLineTwo = this.state.title.split(' ')[3]
    
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-l1-configurator">
              <h3 className="title-l1-text">{titleLineOne}</h3>
            </div>
            <div className="title-l2-configurator">
              <h3 className="title-l2-text">{titleLineTwo}</h3>
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