import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {notificationReducer} from "@/store/reducers/notificationReducer/notificationReducer";
import {playerReducer} from "@/store/reducers/playerReducer/playerReducer";

const rootReducer = combineReducers({
    notifications: notificationReducer,
    player: playerReducer,
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        if (state.count) nextState.count = state.count;
        return nextState;
    } else {
        return rootReducer(state, action);
    }
};