import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Testimonial from './components/testimonial/Testimonial';
import Configurator from './components/configurator/Configurator';

class Routes extends Component {

  render() {
    return(
      <Router>
        <main>
          <Navbar/>
          <div className="contaiener text-center">
            <Route exact path="/" component={Testimonial} />
            <Route exact path="/config" component={Configurator} />
          </div>

        </main>
      </Router>
    );
  }
}

export default Routes