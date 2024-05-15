// userReducer.ts
import { LOGIN, LOGOUT, CHANGE_NAME, SET_CREDENTIALS } from "./type";

interface UserState {
    isSignedIn: boolean;
    userName: string;
    username: string;
    password: string;
}

const initialState: UserState = {
    isSignedIn: false,
    userName: "Wilbert",
    username: "admin",
    password: "admin"
};

const userReducer = (state = initialState, action: { type: string; payload?: any; }): UserState => {
    switch(action.type) {
        case LOGIN:
            const { username, password } = action.payload;
            if (state.username === username && state.password === password) {
                return {...state, isSignedIn: true };
            }
            return state;
        case LOGOUT:
            return {...state, isSignedIn: false };
        case CHANGE_NAME:
            return {...state, userName: "FUKUI" };
        case SET_CREDENTIALS:
            return {...state, username: action.payload.username, password: action.payload.password };
        default:
            return state;
    }
};

export default userReducer;