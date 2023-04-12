import {
    PAUSE,
    PLAY,
    SET_ACTIVE,
    SET_CURRENT_TIME,
    SET_DURATION, SET_VOLUME
} from "@/store/reducers/playerReducer/playerReducerActions";

export const playTrack = (payload) => {
    return {type: PLAY, payload}
}

export const pauseTrack = (payload) => {
    return {type: PAUSE, payload}
}

export const setActive = (payload) => {
    return {type: SET_ACTIVE, payload}
}

export const setDuration = (payload) => {
    return {type: SET_DURATION, payload}
}

export const setCurrentTime = (payload) => {
    return {type: SET_CURRENT_TIME, payload}
}

export const setVolume = (payload) => {
    return {type: SET_VOLUME, payload}
}