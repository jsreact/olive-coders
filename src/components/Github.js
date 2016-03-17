import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as githubActions from '../actions/github'

class Github extends Component {

  // static propTypes = {
  //   children: PropTypes.any,
  //   actions: PropTypes.object
  // };

  render () {
    console.log(this.props)
    return (
      <div>
          <h1>Stargazers</h1>

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
