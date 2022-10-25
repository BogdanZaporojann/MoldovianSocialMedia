import {connect} from "react-redux";
import {toggleFollowingProgress, getUsers, onFollow, onUnfollow} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

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
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress

})

export default connect(mapStateToProps, {
    getUsers,
    onFollow,
    onUnfollow
    })(UsersContainer);