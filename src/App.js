import React, { Component } from 'react';
import './App.css';
import format from 'date-fns/format';

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
      </div>
    );
  }
}

export default App;
