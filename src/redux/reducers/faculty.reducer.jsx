const initialState = {
  data: [],
  isLoading: false
}

const faculties = (state = initialState, actions) => {
  switch (actions.type) {
    case 'faculty/GET_DATA_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'faculty/GET_DATA_FULFILLED':
      return {
        ...state,
        data: actions.payload.data.data,
        isLoading: false
      }
    default:
      return state
  }
}

export default faculties
