import React, { Component } from 'react';

import ReadMore from 'components/ReadMore';
import ToolTip from 'components/ToolTip';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          404 not found
        </p>
        <ReadMore />
        <ToolTip />
      </div>
    );
  }
}

export default NotFound;
