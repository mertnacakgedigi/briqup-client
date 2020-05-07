import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"

export default class RequestModel {
    static index() {
        let request = axios.get(`${REACT_APP_API_URL}/request`)
        return request
    }

    static create(data) {
        let request = axios.post(`${REACT_APP_API_URL}/request`, data)
        return request
      }

    static single(data) {
        let request = axios.get(`${REACT_APP_API_URL}/request/${data}`)
        return request
    }
}