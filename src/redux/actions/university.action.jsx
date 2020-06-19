import axios from 'axios'

export const getUniversities = payload => {
  return {
    type: 'university/GET_DATA',
    payload: axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship_univ?access_token=wahyutampan&fields=*.*')
  }
}
