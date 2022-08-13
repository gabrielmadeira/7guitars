import React, { Component } from 'react';

export default class Test extends Component {
  constructor() {
    super();
    this.state = {
      result: 'no result',
    };
  }

  handleButtonClick = () => {};

  render() {
    return (
      <div>
        <button onclick={this.handleButtonClick}>Does something</button>
        <h1>Result of clicking on the button: {this.state.result}</h1>
      </div>
    );
  }
}
