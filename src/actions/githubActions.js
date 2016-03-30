import 'whatwg-fetch'

const GITHUB_API = 'https://api.github.com'

function receiveUser (name, json) {
  return {
    type: 'RECEIVE_USER',
    user: json
  }
}

function requestUser () {
  return {
    type: 'REQUEST_USER',
  }
}

export function fetchUser ({username}) {
  return (dispatch) => {
    dispatch(requestUser(username))
    return fetch(`${GITHUB_API}/users/${username}`)
      .then(processResponse)
      .then(json => dispatch(receiveUser(username, json)))
      .catch(error => handleResponseError(dispatch, error))
  }
}

export function fetchRepos ({username}) {
  return (dispatch) => {
    return fetch(`${GITHUB_API}/users/${username}/repos`)
    .then(processResponse)
    .then(json => dispatch({
      type: 'FETCH_REPOS',
      repos: json
    }))
    .catch(error => handleResponseError(dispatch, error))
  }
}
// helper functions
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

function handleResponseError (dispatch, error) {
  if (error.statusCode > 400) {
    return dispatch({
      type: 'DISPLAY_ERROR',
      payload: error
    })
  }
}