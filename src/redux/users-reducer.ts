import {updateObjectInArray} from "../utils/object-helper";
import {UserType} from "../types/types";
import {AppStateType} from "./redux-store";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {InferActionsType} from "./redux-store";
import {userAPI} from "../api/userAPI";





let initialState = {
    usersData: [] as Array<UserType>,
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,
}

type InitialStateType = typeof initialState;


export const usersReducer = (state = initialState, action: ActionsTypes) : InitialStateType =>{


    switch (action.type){
        case "FOLLOW":

            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id",{followed: true})
            }
        case "UNFOLLOW":

            return {
                ...state,
                usersData: updateObjectInArray(state.usersData, action.userId, "id",{followed: false})

            }
        case "SET_USERS":
            return {
                ...state,
                usersData: [...action.users]
            }
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_TOTAL_USERS_COUNT":
            return {
                ...state,
                totalUsersCount: action.count
            }
        case "TOGGLE_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        case "TOGGLE_IS_FOLLOWING_PROGRESS":
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



export const actions = {
    followSuccess : (userId: number) => ({type: "FOLLOW", userId: userId} as const),
    unfollowSuccess : (userId: number) => ({type: "UNFOLLOW", userId: userId} as const),
    setUsers : (users: Array<UserType>) => ({type: "SET_USERS", users: users} as const),
    setCurrentPage : (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage: currentPage} as const),
    setTotalUsersCount : (count: number) => ({type: "SET_TOTAL_USERS_COUNT", count: count} as const),
    toggleIsFetching : (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching: isFetching} as const),
    toggleFollowingProgress : (isFetching: boolean, userId: number) => ({type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFetching, userId} as const)
}


type PropertiesType<T> = T extends {[key: string] : infer U} ? U : never
type ActionsTypes = InferActionsType<typeof actions>

type DispatchType = Dispatch<ActionsTypes>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionsTypes>


export const getUsers = (currentPage: number, pageSize: number): ThunkType =>{
    return async (dispatch, getState) => {

        dispatch(actions.toggleIsFetching(true));
        dispatch(actions.setCurrentPage(currentPage));

        let data = await userAPI.getUsers(currentPage, pageSize);

        dispatch(actions.toggleIsFetching(false));
        dispatch(actions.setUsers(data.items));
        dispatch(actions.setTotalUsersCount(data.totalCount));
    }
}

export const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: any, actionCreator: (userId: number)=> ActionsTypes) => {

    dispatch(actions.toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId)
    if(data.resultCode==0){

        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleFollowingProgress(false, userId))
}

export const onFollow = (userId: number): ThunkType => {

        return async (dispatch) => {
        let apiMethod = userAPI.follow.bind(userAPI);
        let actionCreator = actions.followSuccess;
        _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}


export const onUnfollow = (userId: number): ThunkType =>{

        return async (dispatch) => {
        let apiMethod = userAPI.unfollow.bind(userAPI);
        let actionCreator = actions.unfollowSuccess;
        _followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
}