import React, { Component } from 'react';
import './ToolTip.css';

class ToolTip extends Component {
  render() {
    return (
      <div class="tooltip-container">
        <div class="tooltip-btn tooltip-toggle">Tooltip hover</div> 
        <div class="tooltip-content">
          <p>Hello from inside the CSS tooltip!</p> 
        </div>          
      </div>
    );
  }
}

export default ToolTip;
