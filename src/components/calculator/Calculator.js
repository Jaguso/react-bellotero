import React, { Component } from 'react';

class Calculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Monthly ingredient spending</p>
          </div>
          <div className="col">
            <input/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p>Full-time employees that process invoices</p>
          </div>
          <div className="col">
            <input/>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;