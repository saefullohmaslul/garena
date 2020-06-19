const initialState = {
  data: {},
  isLoading: false
}

const contents = (state = initialState, actions) => {
  switch (actions.type) {
    case 'content/ADD_DATA_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'content/ADD_DATA_FULFILLED':
      return {
        ...state,
        data: actions.payload.data.data[0],
        isLoading: false
      }
    default:
      return state
  }
}
export default contents
