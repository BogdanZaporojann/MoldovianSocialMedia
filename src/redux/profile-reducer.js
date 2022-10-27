import {profileAPI} from "../api/api";

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
    ],
    profile: null,
    status:''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST : {
            let body = action.newPostText;
            return {
                ...state,
                profileData: [...state.profileData, {likesCount: 1, text: body}],
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


export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
})

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
        type: SET_STATUS,
        status
    })


export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(data => {
             dispatch(setStatus(data));
    })
}

export const updateUserStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(data => {
        if(data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}