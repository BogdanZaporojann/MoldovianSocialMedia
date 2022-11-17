import {authAPI,captchaAPI} from "../api/api.js";


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



type SetAuthUSerDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUSerDataActionPayloadType
}

type SetAuthUSerDataActionPayloadType = {
    userId: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean
}

export const setAuthUserData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) : SetAuthUSerDataActionType => ({
    type:SET_USER_DATA,
    payload: {userId, login, email, isAuth}
})




export type GetCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    captchaUrl: string | null
}

const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    captchaUrl
})



export const getAuthUserData = () => async (dispatch: any) => {
    let data = await authAPI.me();

            if(data.resultCode === 0) {
                let {id,login, email} = data.data;
                dispatch(setAuthUserData(id,login,email,true));
            }
}




export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: any) => {

    let result = await authAPI.login(email, password, rememberMe);
            if(result.data.resultCode === 0){
                debugger
                dispatch(getAuthUserData())
            }
}

export const logout = () => async (dispatch: any) => {
    let result = await authAPI.logout()
            if(result.data.resultCode === 0){
                debugger
                dispatch(setAuthUserData(null,null,null,false))
            }
}

export const getCaptchaUrl = () => async (dispatch: any) =>  {
    const urlCaptcha = await captchaAPI.getCaptcha();
    dispatch(getCaptchaUrlSuccess(urlCaptcha))
}

