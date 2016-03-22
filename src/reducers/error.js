const initialState = {
  error: null
}

export default function error(state = initialState, action) {
  if(action.type === 'DISPLAY_ERROR') {
    return { ...state, error: {
      message: 'Sorry that is not a valid username.'
    } }
  }
  return state
}