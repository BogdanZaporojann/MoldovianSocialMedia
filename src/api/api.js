import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY':'cb767d5f-96f7-4dea-8bd9-88057a3395c0'
    }
});


export let userAPI = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(result => result.data);
    },
    unfollow(userId=1){
        debugger
        return instance.delete(`follow/${userId}`)
            .then(result => result.data);
    },
    follow(userId=1){
        return instance.post(`follow/${userId}`)
            .then(result => result.data);
    },
    getProfile(userId){
        console.warn("To get profile of user with id "+userId+" please use profileAPI.getProfile() method");
        profileAPI.getProfile(userId);
    }

}


export let profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
            .then(result => result.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
            .then(result => result.data)
    },
    updateStatus(status){
        return instance.put('profile/status',{status: status})
            .then(result => result.data)
    }
}

export const authAPI = {
    me(){
        return instance.get(`/auth/me`)
            .then(result => result.data)
    }
}