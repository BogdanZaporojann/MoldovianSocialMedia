import {profileAPI} from "../api/api";

const ADD_POST= 'ADD-POST'
const UPDATE_POST='UPDATE-POST';
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
    newPostText: 'it-kamasutra.com',
    profile: null,
    status:''
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST : {
            let newPost = {
                text: state.newPostText,
                likesCount: 1
            };
            let stateCopy = {...state};
            stateCopy.profileData = [...stateCopy.profileData];
            stateCopy.profileData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_POST: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text;
            return stateCopy;
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


export const addPost = () => {
    let ADD_POST = 'ADD-POST'
    return{
        type: ADD_POST
    }
}
export const updateNewPostText = (text) => {
    let UPDATE_POST = 'UPDATE-POST'
    return {
        type: UPDATE_POST,
        text: text
    }
}

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