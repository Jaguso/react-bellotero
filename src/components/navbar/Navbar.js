import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="#" className="navbar-brand">wpeof</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <p>Home</p>
            </li>
            <li className="nav-item">
              <a>
                Solutions
              </a>
            </li>
            <li className="nav-item">
              Stories
            </li>
            <li className="nav-item">
              Solutions
            </li>
            <li className="nav-item">
              Solutions
            </li>
            <li className="nav-item">
              Solutions
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;