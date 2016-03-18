import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import SearchBar from './SearchBar'
import * as githubActions from '../actions/githubActions'

class Github extends Component {

  // static propTypes = {
  //   children: PropTypes.any,
  //   actions: PropTypes.object
  // };

  render () {
    return (
      <div>
          <SearchBar {...this.props} />
          <h1>GitHub User</h1>

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
