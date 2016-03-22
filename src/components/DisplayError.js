import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import * as githubActions from '../actions/githubActions'

class DisplayError extends Component {
  render () {
    const { props: { error } } = this
    if (!this.props.error.error) return null

    return (
      <div>
        <p>{error.error.message}</p>
      </div>
    )
  }
}

const mapStateToProps = ({error}) => {
  return { error }
}

export default connect(mapStateToProps)(DisplayError)
