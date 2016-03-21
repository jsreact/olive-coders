import 'whatwg-fetch'

const GITHUB_API = 'https://api.github.com'

export function fetchUser (options) {
  const { username } = options

  return (dispatch) => {
    fetch(`${GITHUB_API}/users/${username}`)
    .then(processResponse)
    .then(res => dispatch({
      type: 'FETCH_USER',
      user: res
    }))
    .catch(error => console.log(error))
  }
}

export function fetchRepos (options) {
  const { username } = options

  return (dispatch) => {
    fetch(`${GITHUB_API}/users/${username}/repos`)
    .then(processResponse)
    .then(res => dispatch({
      type: 'FETCH_REPOS',
      repos: res
    }))
    .catch(error => console.log(error))
  }
}

function processResponse (response) {
  let isOk = response.ok
  return response.text()
  .then(body => {
    try { body = JSON.parse(body) }
    catch (error) { if (isOk) isOk = false }

    if (isOk) return body

    throw { body, statusCode: response.status }
  })
}