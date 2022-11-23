import {instance, ResponseType} from "./api";
import {PhotosType, ProfileType} from "../types/types";


type SavePhotoResponseDataType =  {
    photos: PhotosType
}

export let profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`)
            .then(result => result.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(result => result.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<string>>('profile/status', {status: status})
            .then(result => result.data)
    },
    updatePersonalInformation(profile:ProfileType){
        return instance.put<ResponseType>(`profile`,profile).then(result=>result.data)
    },
    savePhoto(photo:any){
        const formData = new FormData();
        formData.append('image',photo)
        return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`,formData,{headers:{
            'Content-Type':'multipart/form-data'
            }}).then(result=>result.data)
    }
}