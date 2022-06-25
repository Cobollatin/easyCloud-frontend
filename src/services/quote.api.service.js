import http from '../core/services/http-common'

export class QuoteApiService {
  getAll () {
    return http.get('/api/v1/quotes/test')
  }

  create (data) {
    return http.post(`/api/v1/quotes/add/${data.userId}`, data, data.userId)
  }

  update (id, data) {
    return http.put(`/api/v1/users/${id}`, data)
  }

  delete (id) {
    return http.delete(`/api/v1/quotes/delete/${id}`)
  }
}
