import http from '../core/services/http-common'

export class ApiService {
  getAll (item) {
    return http.get(`/${item}`)
  }

  create (item, data) {
    return http.post(`/${item}`, data)
  }

  update (item, id, data) {
    return http.put(`/${item}/${id}`, data)
  }

  delete (item, id) {
    return http.delete(`/${item}/${id}`)
  }
}
