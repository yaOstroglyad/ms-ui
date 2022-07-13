import http from '../../../utils/http';

export function serviceLogout() {
    return http.get('/logout')
}

export function serviceLogin(data: object) {
    return http.post('/login', data)
}

export function serviceLoginByToken(token: string) {
    return http.get('/accessToken', {
        params: { token }
    })
}

