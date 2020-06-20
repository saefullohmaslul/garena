import axios from 'axios'

export const getTestimonials = payload => {
  return {
    type: 'testimonial/GET_DATA',
    payload: axios.get(`${process.env.API_HOST}/sea_scholarship_testimoni?access_token=wahyutampan&fields=*.*`)
  }
}
