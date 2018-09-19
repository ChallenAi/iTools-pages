import React, { Component } from 'react';
import './ReadMore.css';

class ReadMore extends Component {
  render() {
    return (
        <div class="readmo">
        <input type="checkbox" id="toggler" /> 
        <label for="toggler"></label>
        <p>This is a filler text filler text filler text lorem ipsum dolor sit ametThis is a filler text filler text filler text lorem ipsum dolor sit amet. filler text filler text filler text lorem ipsum dolor sit ametThis is a filler text filler text filler text lorem ipsum dolor sit amet. filler text filler text filler text lorem ipsum dolor sit ametThis is a filler text filler text filler text lorem ipsum dolor sit amet</p>
        </div>
    );
  }
}

export default ReadMore;
