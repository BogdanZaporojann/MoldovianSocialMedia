import {profileAPI} from "../api/api.js";
import {PostType, ProfileType} from "../types/types";

const ADD_POST= 'ADD-POST'
const SET_USER_PROFILE='SET_USER_PROFILE';
const SET_STATUS='SET_STATUS';


let initialState = {
    profileData: [
        {
            id: 1,
            text: 'Text 1',
            likesCount: 1
        },
        {
            id: 2,
            text: 'Text 2',
            likesCount:2
        },
        {
            id: 3,
            text: 'Text 3',
            likesCount:3
        }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status:'',
    newPostText: ''
}

export type InitialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: any) : InitialStateType  => {
    switch (action.type){
        case ADD_POST : {
            let body = action.newPostText;
            return {
                ...state,
                profileData: [...state.profileData, {id: 5, likesCount: 1, text: body}],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

export const addPost = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText
})




type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType) : SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
})




type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({
        type: SET_STATUS,
        status
})





export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId)
             dispatch(setStatus(data));

}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status)
        if(data.resultCode === 0) {
            dispatch(setStatus(status))
        }
}

export const getUserProfile = (userId: number) => async (dispatch: any) => {
        let data = await profileAPI.getProfile(userId)
                dispatch(setUserProfile(data));
    }
