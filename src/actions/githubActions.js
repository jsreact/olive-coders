import 'whatwg-fetch'

const GITHUB_API = 'https://api.github.com'

export function fetchUser (options) {
  const { username } = options
// username is undefined??
// learn more about destructuring
  return (dispatch) => {

  }
}

export let fetchRepo = (options) => {
  return {
    type: 'FETCH_REPO',
    repo: options
  }
}

