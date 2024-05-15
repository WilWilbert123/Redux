// userAction.ts
import { LOGIN, LOGOUT, CHANGE_NAME, SET_CREDENTIALS } from "./type";

export const loginAction = (username: string, password: string) => {
    return {
        type: LOGIN,
        payload: { username, password }
    };
};

export const logoutAction = () => {
    return {
        type: LOGOUT
    };
};

export const changeNameAction = (userName: string) => {
    return {
        type: CHANGE_NAME,
        payload: userName
    };
};

export const setCredentialsAction = (username: string, password: string) => {
    return {
        type: SET_CREDENTIALS,
        payload: { username, password }
    };
};
