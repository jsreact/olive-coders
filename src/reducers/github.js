const initialState = {
  user: {},
  repo: {}
}

export default function github(state = initialState, action) {
  if(action.type === 'FETCH_USERS') {
    return { user: action.user }
  }
  else if(action.type === 'FETCH_REPO') {
    return { repo: action.repo }
  }
  return state
}