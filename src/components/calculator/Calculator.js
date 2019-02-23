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
    // console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  calculateFoodSaving() {
    return parseInt(this.state.ingredients) * 0.3 
  }

  calculateAnualSaving(foodCost) {
    return parseInt(this.state.employees) * 1337 + foodCost 
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
            {this.state.ingredients ? <h3>$ {this.calculateFoodSaving()}</h3> : <h3>$</h3> }
            <small>Estimated cost food savings</small>
          </div>
          <div className="col">
            {this.state.ingredients && this.state.employees ? <h3>$ {this.calculateAnualSaving(this.calculateFoodSaving())}</h3> : <h3>$</h3> }
            <small>Your estimated anual savings</small>
          </div>
        </div>

      </div>
    );
  }
}

export default Calculator;