import {connect} from "react-redux";
import {
    FOLLOW_ACTION_CREATOR,
    SET_CURRENT_PAGE_ACTION_CREATOR,
    SET_TOTAL_USERS_COUNT_ACTION_CREATOR,
    SET_USERS_ACTION_CREATOR, TOGGLE_IS_FETCHING_ACTION_CREATOR,
    UNFOLLOW_ACTION_CREATOR
} from "../../redux/users-reducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import preload from '../../assets/images/VAyR.gif'
import {Preloader} from "../common/Preloader/Preloader";

class UsersComponent extends React.Component{

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=10`)
            .then(result => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(result.data.items);
                this.props.setTotalUsersCount(result.data.totalCount);
            })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=10`)
            .then(result => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(result.data.items);
            })
    }


    render(){
        return(
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : null}
                <Users usersData={this.props.usersData}
                       totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}/>
            </>
        );
    }
}

let mapStateToProps = (state)  => ({
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching

})

let mapDispatchToProps = (dispatch) => {

    return {

        follow: (userId) => {
            dispatch(FOLLOW_ACTION_CREATOR(userId));
        },

        unfollow: (userId) => {
                dispatch(UNFOLLOW_ACTION_CREATOR(userId))
        },

        setUsers: (users) => {
            dispatch(SET_USERS_ACTION_CREATOR(users))
        },

        setCurrentPage: (currentPage) => {
            dispatch(SET_CURRENT_PAGE_ACTION_CREATOR(currentPage))
        },

        setTotalUsersCount: (count) => {
            dispatch(SET_TOTAL_USERS_COUNT_ACTION_CREATOR(count));
        },

        toggleIsFetching: (isFetching) => {
            dispatch(TOGGLE_IS_FETCHING_ACTION_CREATOR(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);