
export default function fetchUser(options) {
  return {
    type: 'FETCH_USER',
    user: options
  }
}

export default function fetchRepo(options) {
  return {
    type: 'FETCH_REPO',
    repo: options
  }
}
