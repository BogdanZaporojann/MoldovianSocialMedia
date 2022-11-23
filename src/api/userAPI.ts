import {instance, ResponseType} from "./api";
import {GetItemsType} from "./api";


export let userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(result => result.data);
    },
    follow(userId = 1) {
        return instance.post< ResponseType >(`follow/${userId}`)
            .then(result => result.data);
    },
    unfollow(userId = 1) {
        return instance.delete< ResponseType>(`follow/${userId}`)
            .then(result => result.data) as Promise<ResponseType>
        debugger
    }
}