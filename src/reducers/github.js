const initialState = {
  user: {},
  repos: []
}

export default function github(state = initialState, action) {
  if(action.type === 'FETCH_USER') {
    return { ...state, user: action.user }
  }
  else if(action.type === 'FETCH_REPOS') {
    return { ...state, repos: action.repos }
  }
  return state
}