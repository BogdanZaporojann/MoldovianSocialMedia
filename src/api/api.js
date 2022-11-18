import axios from 'axios';


let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY':'d9f5b548-66e1-4d3a-9a83-125429519095'
    }
});


export let userAPI = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(result => result.data);
    },
    unfollow(userId=1){
        return instance.delete(`follow/${userId}`)
            .then(result => result.data);
        debugger
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
    me() {
        return instance.get(`/auth/me`)
            .then(result => result.data)
    },
    login(email, password, rememberMe=false,captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe,captcha})
    },
    logout(){
        return instance.delete(`auth/login`)
    }
}

export const captchaAPI = {
    getCaptcha(){
        return instance.get(`security/get-captcha-url`).then(result=>result.data.url)
    }
}