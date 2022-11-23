import {instance, ResponseType} from "./api";


type MeResponseDataType = {id: number,login: string,email: string}

type LoginDataResponseType = {userId: number}





export const authAPI = {
    me() {
        return instance.get< ResponseType<MeResponseDataType> >(`/auth/me`)
            .then(result => result.data)
    },
    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return instance.post< ResponseType<LoginDataResponseType> >(`/auth/login`, {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete< ResponseType >(`auth/login`)
    }
}