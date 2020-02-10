import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'State Content from index.js',
      showComponent: false
    };
  }

  toggleButton = () => {
    this.setState({
      showComponent: !this.state.showComponent
    })
  }
  render() {
    const showDiv = this.state.showComponent ? <Hello name={this.state.name} /> : 'Click this Button to Show the Component'
    return (
      <div>
        <button onClick={this.toggleButton}>{showDiv}</button>
        <Hello />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
