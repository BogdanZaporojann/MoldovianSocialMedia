import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {ResultCodesEnum} from "../api/api";
import {authAPI} from "../api/authAPI";
import {captchaAPI} from "../api/captchaAPI";


const SET_USER_DATA='auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null
}

let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}



export const authReducer = (state=initialState, action: any): InitialStateType  => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        }
        default:
            return {
                ...state
            }
    }
}

type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessType


type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) : SetAuthUserDataActionType => ({
    type:SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})




export type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string | null
}

const getCaptchaUrlSuccess = (captchaUrl: string | null): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
})








type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>

export const getAuthUserData = (): ThunkType => {

        return async (dispatch) => {
        let data = await authAPI.me();

        if(data.resultCode === ResultCodesEnum.Success) {
            let {id,login, email} = data.data;
            dispatch(setAuthUserData(id,login,email,true));
        }
    }
}




export const login = (email: string, password: string, rememberMe: boolean,captchaUrl:string): ThunkType => {

        return async (dispatch) => {
        let result = await authAPI.login(email, password, rememberMe,captchaUrl);
        if(result.data.resultCode === ResultCodesEnum.Success){
            dispatch(getAuthUserData())
            dispatch(getCaptchaUrlSuccess(null));
        }
        if(result.data.resultCode === ResultCodesEnum.CaptchaIsRequired){
            debugger
            dispatch(getCaptchaUrl())
        }
    }
}

export const logout = (): ThunkType => {

        return async (dispatch) => {
        let result = await authAPI.logout()
        if(result.data.resultCode === ResultCodesEnum.Success){
            dispatch(setAuthUserData(null,null,null,false))
        }
    }
}

export const getCaptchaUrl = (): ThunkType => {

        return async (dispatch) =>  {
        const urlCaptcha = await captchaAPI.getCaptcha();
        dispatch(getCaptchaUrlSuccess(urlCaptcha))
    }
}

