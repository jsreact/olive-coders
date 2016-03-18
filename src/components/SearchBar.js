import React, { Component } from 'react'

class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  handleSearch (e) {
    this.setState({ username: e.target.value })
  }

  handleGoClick () {
    this.props.actions.fetchUser(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            size='45'
            placeholder='&#xf002; Search GitHub User'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button
            type="submit"
            onClick={this.handleGoClick.bind(this)}>
            Go!
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar