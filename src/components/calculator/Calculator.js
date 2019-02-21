import React, { Component } from 'react';

class Calculator extends Component {

  constructor() {
    super();
    this.state = {
      ingredients: '',
      employees: ''
    }
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <p>Monthly ingredient spending</p>
          </div>
          <div className="col">
            <input 
              type="text"
              name="ingredients"
              className="form-control"
              value={this.state.ingredients}
              onChange={this.onChangeInput}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>Full-time employees that process invoices</p>
          </div>
          <div className="col">
            <input
              type="text"
              name="employees"
              className="form-control"
              value={this.state.employees}
              onChange={this.onChangeInput}
            />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col">
            <h3>something</h3>
            <small>Estimated cost food savings</small>
          </div>
          <div className="col">
            <h3>something</h3>
            <small>Your estimated anual savings</small>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;