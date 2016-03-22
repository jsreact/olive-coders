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
    this.props.actions.fetchRepos(this.state)
  }

  render () {
    return (
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type='text'
            className='input-rounded'
            size='45'
            placeholder='&#xf002; Search GitHub User'
            onChange={this.handleSearch.bind(this)}
            value={this.state.username} />
          <button
            type='submit'
            className='button'
            onClick={this.handleGoClick.bind(this)}>
            User!
          </button>
        </form>
      </div>
    )
  }
}

export default SearchBar