const initialState = {
  user: {},
  repos: []
}

export default function github(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_USER':
      return { ...state, isFetchingUser: true }
    case 'RECEIVE_USER': {
      return {
        ...state,
        isFetchingUser: false,
        user: action.user
      }
    }
    default:
      return state
  }
}