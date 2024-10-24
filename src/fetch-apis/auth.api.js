import jwtDecode from 'jwt-decode';
import { $authHost, $host } from './index';

export const signup = async ( username, email, password ) => {
    const data = await $host.post('auth/signup', { username, email, password }) 
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const signin = async (username, email, password) => {
    const data = await $host.post('auth/signin', { username, email, password })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const userCheck = async () => {
    const data = await $authHost.get('auth/check-me')
    if (data.message === 'blocked' || data.message === 'deleted'){
        return data.message
    }
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}