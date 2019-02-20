import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a href="#" className="navbar-brand">wpeof</a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Solutions
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Stories
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;