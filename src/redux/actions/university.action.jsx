import axios from 'axios'

export const getUniversities = payload => {
  return {
    type: 'university/GET_DATA',
    payload: axios.get(`${process.env.API_HOST}/sea_scholarship_univ?access_token=wahyutampan&fields=*.*`)
  }
}
