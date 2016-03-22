import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import DisplayError from './DisplayError'
import SearchBar from './SearchBar'
import GithubUser from './GithubUser'
import * as githubActions from '../actions/githubActions'

class Github extends Component {

  render () {
    return (
      <div>
          <SearchBar {...this.props} />
          <DisplayError />
          <h1>GitHub User</h1>
          <GithubUser github={this.props.github} />

      </div>
    )
  }
}

const mapStateToProps = ({github}) => {
  return { github }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(githubActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Github)
