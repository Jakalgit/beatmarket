import {$host} from "@/http";

export const getOneUser = async (id, token) => {
    const {data} = await $host.get(`user/by-id/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const changeUserName = async (id, name, token) => {
    const {data} = await $host.post(`user/change-name`, {id, name}, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const changeUserIdentifier = async (id, identifier, token) => {
    const {data} = await $host.post(`user/change-identifier`, {id, identifier}, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const getUserNotifications = async (id, token) => {
    const {data} = await $host.get(`user/notifications/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}