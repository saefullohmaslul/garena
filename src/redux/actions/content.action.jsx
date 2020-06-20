import axios from 'axios'

export const getContent = payload => {
  return {
    type: 'content/GET_DATA',
    payload: axios.get(`${process.env.API_HOST}/sea_scholarship?access_token=wahyutampan&fields=*.*`)
  }
}
