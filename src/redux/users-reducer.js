const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';



let initialState = {
    usersData: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false

}

export const usersReducer = (state = initialState, action) =>{


    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if(user.id ===action.userId){
                        return {...user, followed: true};
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user => {
                    if(user.id === action.userId){
                        return {...user, followed: false};
                    }
                    return user;
                })
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
        default:
            return state;
    }
}

export const FOLLOW_ACTION_CREATOR = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const UNFOLLOW_ACTION_CREATOR = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})

export const SET_USERS_ACTION_CREATOR = (users) => ({
    type: SET_USERS,
    users: users

})

export const SET_CURRENT_PAGE_ACTION_CREATOR = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const SET_TOTAL_USERS_COUNT_ACTION_CREATOR = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: count
})

export const TOGGLE_IS_FETCHING_ACTION_CREATOR = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})