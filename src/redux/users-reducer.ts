import {userAPI} from "../api/api.js";
import {updateObjectInArray} from "../utils/object-helper";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';





let initialState = {
    usersData: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState;


export const usersReducer = (state = initialState, action: any) : InitialStateType =>{


    switch (action.type){
        case FOLLOW:

            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id",{followed: true})
            }
        case UNFOLLOW:

            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id",{followed: false})

            }
        case SET_USERS:
            return {
                ...state,
                usersData: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}


type FollowSuccessActionType = {
    type: typeof FOLLOW,
    userId: number
}

export const followSuccess = (userId: number) : FollowSuccessActionType => ({
    type: FOLLOW,
    userId: userId
})





type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW,
    userId: number
}

export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({
    type: UNFOLLOW,
    userId: userId
})



type SetUsersActionType = {
    type: typeof SET_USERS,
    users: UserType
}


export const setUsers = (users: UserType): SetUsersActionType => ({
    type: SET_USERS,
    users: users
})





type SetCurrentPage = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})




type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}


export const setTotalUsersCount = (count: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: count
})






type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING,
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})



type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId

})

export const getUsers = (currentPage: number, pageSize: number) =>async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await userAPI.getUsers(currentPage, pageSize)
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
}

export const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {

    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if(data.resultCode==0){

        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const onFollow = (userId: number) => async (dispatch: any) => {

        let apiMethod = userAPI.follow.bind(userAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }


export const onUnfollow = (userId: number) => async (dispatch: any) => {
    let apiMethod = userAPI.unfollow.bind(userAPI);
    let actionCreator = unfollowSuccess;
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
}