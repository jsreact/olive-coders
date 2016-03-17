import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Github from './Github'

class Home extends Component {
  render () {
    return (
      <div>
        <SearchBar />
        <Github />
      </div>
    )
  }
}

export default Home