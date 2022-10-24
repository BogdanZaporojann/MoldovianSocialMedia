import axios from "axios";


let instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        'API-KEY':'5d793c99-cbef-4f7e-8001-c502c1ec99a5'
    }
});


export const userAPI = {
    getUsers(currentPage=1, pageSize=10){
        return instance.get( `users?page=${currentPage}&count=${pageSize}`)
            .then(result => result.data);
    }
}