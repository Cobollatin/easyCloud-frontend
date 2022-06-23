import http from '../core/services/http-common'

export class UsersApiService {
  getByEmail (email) {
    return http.get(`/users/${email}`)
  }

  login (data) {
    return http.post('/auth/sign-in', data)
  }

  create (data) {
    return http.post('/auth/sign-up', data)
  }

  update (id, data) {
    return http.put(`/users/${id}`, data)
  }

  delete (id) {
    return http.delete(`/users/${id}`)
  }
}
export default new UsersApiService()
