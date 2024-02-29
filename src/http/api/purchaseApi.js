import {$host} from "@/http";

export const getUserPurchases = async (id, token) => {
    const {data} = await $host.get(`purchase/by-user/${id}`, {headers: {Authorization: `Bearer ${token}`}})
    return data
}