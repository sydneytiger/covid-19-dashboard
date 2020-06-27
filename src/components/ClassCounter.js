import React, { Component } from 'react'

export default class ClassCounter extends Component {
  constructor(props){
    super(props);

    this.state = {Count: 0};
  }

  render() {
    return (
      <>
        <div>
          <button onClick={ () => this.setState ({Count: this.state.Count + 1})}>Increase count</button>
        </div>
        <div>
          <button onClick={ () => this.setState ({Count: this.state.Count - 1})}>Decrease count</button>
        </div>
        <div>
          Count is: {this.state.Count}
        </div>
      </>
    )
  }
}
