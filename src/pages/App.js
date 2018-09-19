import React, { Component } from 'react';
import './App.css';
import format from 'date-fns/format';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          hello, pages
        </p>
        <p className="App-intro">
          {
            format(new Date(), 'YYYY MMMM do, h:mm:ss')
          }
        </p>
        <Link to="/404">404 page</Link>
      </div>
    );
  }
}

export default App;
