import axios from 'axios'


const REACT_APP_API_URL = process.env.REACT_APP_API_URL  || "http://localhost:3001/api/v1"

export default class OfferModel {

    static create(data,id) {
        let request = axios.post(`${REACT_APP_API_URL}/request/${id}/offer`, data)
        return request
      }


}