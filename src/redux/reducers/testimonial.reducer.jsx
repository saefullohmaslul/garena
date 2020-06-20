const initialState = {
  data: [],
  isLoading: false
}

const testimonials = (state = initialState, actions) => {
  switch (actions.type) {
    case 'testimonial/GET_DATA_PENDING':
      return {
        ...state,
        isLoading: true
      }
    case 'testimonial/GET_DATA_FULFILLED':
      return {
        ...state,
        data: actions.payload.data.data,
        isLoading: false
      }
    default:
      return state
  }
}

export default testimonials
