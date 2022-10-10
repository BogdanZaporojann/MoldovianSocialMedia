const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    usersData: []

}

export const usersReducer = (state = initialState, action) =>{


    switch (action.type){
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map( user=> {
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
                usersData: [...state.usersData, ...action.users]
            };
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