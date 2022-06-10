import http from '../core/services/http-common'

export class UsersApiService {
  getAll (email) {
    return http.get(`/users/${email}`)
  }

  create (data) {
    return http.post('/users', data)
  }

  update (id, data) {
    return http.put(`/users/${id}`, data)
  }

  delete (id) {
    return http.delete(`/users/${id}`)
  }
}
