import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div>
        <header>
          Links:
          {' '}
          <Link to="/">Home</Link>
          {' '}
          <Link to="/About">About</Link>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App