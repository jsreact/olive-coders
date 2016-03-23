import React, { Component } from 'react'
import rd3 from 'react-d3'

const PieChart = rd3.PieChart

class GithubUser extends Component {
  reposByStars () {
    // data for d3 chart
    let data = this.props.github.repos.map(function(repo, index) {
      return {label: repo.name, value: repo.stargazers_count}
    })
    return data
  }
  render () {
    const { github: { user, repos } } = this.props
    // practicing ES6 destructuring!

    const pieData = this.reposByStars()
    if (user.name) {
      return (
        <div>
          <p>{user.name}</p>
          <p>{user.location}</p>
          <img src={user.avatar_url} className='github-image' />
          <div className='piechart'>
            <PieChart
              data={pieData}
              width={500}
              height={400}
              radius={100}
              innerRadius={20}
              sectorBorderColor="white"
            />
          </div>
        </div>
      )
    } else {
      return (
        <p>Looking for someone?</p>
      )
    }
  }
}

export default GithubUser