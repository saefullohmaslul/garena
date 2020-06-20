import axios from 'axios'

export const getFaculties = payload => {
  return {
    type: 'faculty/GET_DATA',
    payload: axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_faculty?access_token=wahyutampan')
  }
}
