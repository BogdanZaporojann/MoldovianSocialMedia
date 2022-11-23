import {instance} from "./api";

type CaptchaResponseType = {
    data: {
        url: string
    }
}

export const captchaAPI = {
    getCaptcha() {
        return instance.get(`security/get-captcha-url`).then(result => result.data.url)
    }
}