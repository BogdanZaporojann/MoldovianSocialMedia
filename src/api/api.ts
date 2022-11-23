import axios from 'axios';
import {UserType} from "../types/types";


export let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY':'d9f5b548-66e1-4d3a-9a83-125429519095'
    }
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}

export type GetItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}
export type ResponseType<D = {}> = {
    data: D,
    messages: Array<string>
    resultCode: ResultCodesEnum
}