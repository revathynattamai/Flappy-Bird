import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './style.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  dieBird() {
    let elem = document.getElementById('bubble');
    elem.parentNode.removeChild(elem);
    this.setState({ count: ++this.state.count });
  }


  bubbles() {
    let arr = [];
    for (let i = 100; i >= 5; i = i - 10) {
        arr.push(<div style={{ animation: `animateBubble ${i}s linear infinite, sideWays 5s ease-in-out infinite alternate`}} id='bubble' onClick={this.dieBird.bind(this)} />)
    }
    return arr;
  }

  render() {
    return (
      <div className='main'>
        {this.bubbles()}
        <span style={{ color: 'black', fontSize: 50 }}>{this.state.count}</span>
      </div>
    );
  }
}

export default App;
