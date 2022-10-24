const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';




let initialState = {
    usersData: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []

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

export const follow = (userId) => ({
    type: FOLLOW,
    userId: userId
})

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId: userId
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})

export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})

export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: count
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId

})