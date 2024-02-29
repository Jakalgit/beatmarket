import {$host} from "@/http";

export const createFeedbackPost = async (text) => {
    const {data} = $host.post(`feedback`, {text})
    return data
}