import axios from 'axios'
import { Message } from 'element-ui'

Object.defineProperties(axios, {
  $context: {
    get () {
      return '/aep-rule-engine'
    }
  }
})

const http = axios.create({
  baseURL: axios.$context
})

http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          Message.error(error.response.data)
          break
        case 404:
          Message.error(error.response.data)
          break
      }
    }
    return Promise.reject(error)
  }
)

export default http
