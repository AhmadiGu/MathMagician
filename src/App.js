import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navigation';
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-app">

        <Navbar />
        <Routes>
          <Route
            path="/math-magicians/"
            element={(<Home />)}
          />
          <Route
            path="/math-magicians/calculator"
            element={(<Calculator />)}
          />
          <Route
            path="/math-magicians/quote"
            element={(<Quote />)}
          />
        </Routes>
      </div>
    );
  }
}
export default App;
