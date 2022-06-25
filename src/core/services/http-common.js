import axios from 'axios'

export default axios.create({
  baseURL: 'https://easycloud-back.azurewebsites.net',
  headers: { 'Content-type': 'application/json' },
})
