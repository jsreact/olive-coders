import React, { Component } from 'react'

class GithubUser extends Component {
  reposBySize () {
    this.props.github.repos.forEach(function(currVal) {
      console.log(currVal.name)
    })
  }
  render () {
    console.log(this.props)
    const { github: { user, repos } } = this.props
    // practicing ES6 destructuring!
    if (user.name) {
      return (
        <div>
          <div>{user.name}</div>
          <div>{user.location}</div>
          <img src={user.avatar_url} width='144' height='144'
              style={{ borderRadius: '200px' }} />
          <div>{this.reposBySize.call(this)}</div>
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