import React, { Component } from 'react';
import { render } from 'react-dom';
import styles from './style.less';

class App extends Component {
  constructor() {
    super();
    this.state = {
      stage: 9,
      cleared: false,
    }
  }

  dieBird() {
    let elem = document.getElementById('die');
    elem.parentNode.removeChild(elem);
    this.setState(prevState => ({
      stage: ++prevState.stage,
      cleared: !prevState.cleared
    }));
  }

  enableButton() {
    if (this.state.stage == document.getElementById('stage').value) { document.getElementById('stage').disabled = true; } else {
      document.getElementById('stage').disabled = false;
    }
  }

  render() {
    return (
      <div className='main'>
        <div className='sparrow'>
          <button id='die' onClick={this.dieBird.bind(this)} />
        </div>
        <button disabled={!this.state.cleared}>Next</button>
      </div>
    );
  }
}

export default App;
