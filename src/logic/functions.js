import {getCookie, deleteCookie, setCookie} from "cookies-next";
import {isValidationToken} from "@/http/api/authApi";
import jwtDecode from "jwt-decode";

export const reformatCount = (starCount) => {
    let price = ""
    if (starCount.length > 3) {
        let k = 0;
        for (let i = starCount.length - 1; i >= 0; i--) {
            price = starCount.charAt(i) + price
            k++
            if ((i - starCount.length) % 3 === 0) {
                price = " " + price
            }
        }
    } else {
        price = starCount
    }
    return price
}

export const serverSideValidationToken = async ({req, res}) => {
    const accessToken = getCookie('act',{ req, res })
    const refreshToken = getCookie('rft',{ req, res })

    let data
    if (accessToken && refreshToken) {
        data = await isValidationToken(accessToken, refreshToken)
        if (!data.isValid) {
            deleteCookie('act',{ req, res })
            deleteCookie('rft',{ req, res })
        } else {
            setCookie('act', data.accessToken, {req, res})
        }
    }

    return data !== undefined && data.isValid
}

export const getUserInfoByToken = (token) => {
    let data
    try {
        data = jwtDecode(token)
    } catch (e) {
        console.log(e)
        return null
    }
    return data
}

export const add_notification = (head, text, type, addNotification) => {
    const id = Date.now()
    addNotification({
        id,
        head,
        text,
        type,
    })
}