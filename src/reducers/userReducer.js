const initialState = {
  email: '',
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {

  switch (action.type) {
    case 'SET_EMAIL':
      return {
        ...state,
        email: action.payload.email,
      }

    default:
      return state
  }
}
