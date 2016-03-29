import styles from '../../styles.css'
import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {
  render () {
    return (
      <div className="navigation">
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

export default App
