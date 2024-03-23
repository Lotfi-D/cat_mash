import axios from 'axios'

export default {
  fetchAllCats() {
    return axios.get(`https://data.latelier.co/cats.json`)
  },

}
