import http from '../core/services/http-common'

export class UsersApiService {
  getByEmail (email) {
    return http.get(`/api/v1/users/${email}`)
  }

  getById (id) {
    return http.get(`/api/v1/users/${id}`)
  }

  login (data) {
    return http.post('/api/v1/users/auth/sign-in', data)
  }

  create (data) {
    return http.post('/api/v1/users/auth/sign-up', data)
  }

  update (id, data) {
    return http.put(`/api/v1/users/${id}`, data)
  }

  delete (id) {
    return http.delete(`/users/${id}`)
  }
}
export default new UsersApiService()
