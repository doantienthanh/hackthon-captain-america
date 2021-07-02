import http from 'api/http';

export async function login(data) {
  return http.post('/auth/login', data);
}
