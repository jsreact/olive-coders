import React, { Component } from 'react'

class GithubUser extends Component {

  render () {
    const { github: { user, repo } } = this.props
    // practicing ES6 destructuring!
    if (user.name) {
      return (
        <div>
          <div>{user.name}</div>
          <div>{user.location}</div>
          <img src={user.avatar_url} width='144' height='144'
              style={{ borderRadius: '200px' }} />
        </div>
      )
    } else {
      return (
        <div>Looking for someone?</div>
      )
    }
  }
}

export default GithubUser