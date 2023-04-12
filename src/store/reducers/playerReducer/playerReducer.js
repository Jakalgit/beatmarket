import {
    PAUSE,
    PLAY,
    SET_ACTIVE,
    SET_CURRENT_TIME, SET_DURATION,
    SET_VOLUME
} from "@/store/reducers/playerReducer/playerReducerActions";

const initialState = {
    active: null,
    volume: 0,
    duration: 0,
    currentTime: 0,
    pause: true,
}

export const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return {...state, pause: false}
        case PAUSE:
            return {...state, pause: true}
        case SET_ACTIVE:
            return {...state, active: action.payload, duration: 0, currentTime: 0}
        case SET_VOLUME:
            return {...state, volume: action.payload}
        case SET_CURRENT_TIME:
            return {...state, currentTime: action.payload}
        case SET_DURATION:
            return {...state, duration: action.payload}
        default:
            return state
    }
}