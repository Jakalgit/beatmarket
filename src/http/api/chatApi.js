import {$host} from '../index'

export const createChat = async (idOwner1, idOwner2, token) => {
    const { data } = await $host.post('chat/create/', {idOwner1, idOwner2}, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const createMessage = async (chatId, text, type, token) => {
    const { data } = await $host.post('chat/create-message/', {chatId, text, type}, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const getChats = async (userId, token) => {
    const { data } = await $host.get(`chat/chats/${userId}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const getMessages = async (chatId, token) => {
    const { data } = await $host.get(`chat/messages/${chatId}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}

export const getUsersByFinder = async (find, userId, token) => {
    const { data } = await $host.post(`chat/users/`, {find, userId}, {headers: {Authorization: `Bearer ${token}`}})
    return data
}