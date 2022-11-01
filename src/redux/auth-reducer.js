import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA='SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state=initialState, action) => {
    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return {
                ...state
            }
    }
}


export const setAuthUserData = (userId, login, email, isAuth) => ({
    type:SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
        .then(data =>  {
            if(data.resultCode === 0) {
                let {id,login, email} = data.data;
                dispatch(setAuthUserData(id,login,email,true));
            }
        });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(result => {
            debugger
            if(result.data.resultCode === 0){
                dispatch(getAuthUserData())
            } else {
                dispatch(stopSubmit("loginForm",{_error : result.data.messages}))
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(result => {
            if(result.resultCode === 0){
                dispatch(setAuthUserData(null,null,null,false))
            }
        })
}