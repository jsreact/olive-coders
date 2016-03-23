const initialState = {
  error: null
}

export default function error(state = initialState, action) {
  if(action.type === 'DISPLAY_ERROR') {
    // how can we use the info in action.payload?
    return { ...state, error: {
      message: 'Sorry that is not a valid username.'
    } }
  }
  return state
}