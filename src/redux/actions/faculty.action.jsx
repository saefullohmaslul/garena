import dotenv from 'dotenv'
dotenv.config()

import axios from 'axios'

export const getFaculties = payload => {
  return {
    type: 'faculty/GET_DATA',
    payload: axios.get(`${process.env.API_HOST}/sea_scholarship_faculty?access_token=wahyutampan`)
  }
}
