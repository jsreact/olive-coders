
export let fetchUser = (options) => {
  return {
    type: 'FETCH_USER',
    user: options
  }
}

export let fetchRepo = (options) => {
  return {
    type: 'FETCH_REPO',
    repo: options
  }
}
