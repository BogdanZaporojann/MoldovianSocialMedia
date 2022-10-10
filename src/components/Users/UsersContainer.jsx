import {connect} from "react-redux";
import {Users} from "./Users";
import {FOLLOW_ACTION_CREATOR,UNFOLLOW_ACTION_CREATOR, SET_USERS_ACTION_CREATOR} from "../../redux/users-reducer";
import {UsersC} from "./UsersC";


let mapStateToProps = (state)  => ({
    usersData: state.usersPage.usersData
})

let mapDispatchToProps = (dispatch) => {

    return {
        follow: (userId) => {
            dispatch(FOLLOW_ACTION_CREATOR(userId));
        },
        unfollow: (userId) => {
            debugger
                dispatch(UNFOLLOW_ACTION_CREATOR(userId))
        },
        setUsers: (users) => {
            dispatch(SET_USERS_ACTION_CREATOR(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);