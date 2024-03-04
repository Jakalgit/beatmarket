import {$host} from '../index'
import Cookies from 'universal-cookie'

export const init = () => {
    const cookies = new Cookies()

    if (!cookies.get('token')) {
        cookies.set('token', "", {path: '/'})
    }
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    return data
}

export const registration = async (email, password, code) => {
    const res = await $host.post('auth/registration', {email, password, code})
    return res
}

export const sendCode = async (email, password) => {
    const {data} = await $host.post('auth/send-code', {email, password})
    return data
}

export const isValidationToken = async (accessToken, refreshToken) => {
    const {data} = await $host.post('auth/check-validation-user-token', {accessToken, refreshToken})
    return data
}