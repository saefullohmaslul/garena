import axios from 'axios'

export const getContent = payload => {
  return {
    type: 'content/GET_DATA',
    payload: axios.get('https://form.v2.support.garena.co.id/_/items/sea_scholarship?access_token=wahyutampan&fields=*.*')
  }
}
