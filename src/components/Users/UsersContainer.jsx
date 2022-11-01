import {connect} from "react-redux";
import {getUsers, onFollow, onUnfollow} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getIsAuth} from "../../redux/users-selectors";

class UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                       followingInProgress={this.props.followingInProgress}
                       isFetching={this.props.isFetching}
                       onFollow={this.props.onFollow}
                       onUnfollow={this.props.onUnfollow}
                       onPageChanged={this.onPageChanged}/>
            </>
        );
    }
}


let mapStateToProps = (state)  => ({
    usersData: state.usersPage.usersData,
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: getIsAuth(state)

})


export default compose(
    connect(mapStateToProps, {getUsers, onFollow, onUnfollow}),
    withAuthRedirect
)(UsersContainer)