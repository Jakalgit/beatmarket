import {$host} from "@/http";

export const getUserConfirmations = async (id, token) => {
    const {data} = await $host.get(`confirmation/by-user/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}