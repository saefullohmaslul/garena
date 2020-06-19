const initialState = {
  data: [],
  isLoading: false
}

const universities = (state = initialState, actions) => {
  switch (actions.type) {
    case 'university/GET_DATA_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'university/GET_DATA_FULFILLED':
      return {
        ...state,
        data: actions.payload.data.data,
        isLoading: false
      }
    default:
      return state
  }
}

export default universities
