import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION,
    SET_NOTIFICATION_LIST
} from "@/store/reducers/notificationReducer/notificationReducerActions";

export const setNotificationList = (payload) => {
    return {type: SET_NOTIFICATION_LIST, payload}
}

export const addNotification = (payload) => {
    return {type: ADD_NOTIFICATION, payload}
}

export const deleteNotification = (payload) => {
    return {type: DELETE_NOTIFICATION, payload}
}