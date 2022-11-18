import {connect} from "react-redux";
import {getUsers, onFollow, onUnfollow, toggleFollowingProgress, setCurrentPage} from "../../redux/users-reducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    usersData: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    followingInProgress: Array<number>
    isFetching: boolean
}

type MapDispatchToPropsType = {
    getUsers: (currentPage: number,pageSize: number) => void
    onFollow: (userId: number) => void
    onUnfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingProgress: (question: boolean, userId: number) => void
}



type PropsType = MapStateToPropsType & MapDispatchToPropsType

class UsersContainer extends React.Component<PropsType>{

    componentDidMount() {
        let {currentPage,pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.setCurrentPage(pageNumber)
        this.props.getUsers(pageNumber, pageSize);
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
                       onFollow={this.props.onFollow}
                       onUnfollow={this.props.onUnfollow}
                       onPageChanged={this.onPageChanged}/>
            </>
        );
    }
}


let mapStateToProps = (state: AppStateType) : MapStateToPropsType  => ({
    usersData: state.usersPage.usersData,
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
})


export default compose(
    withAuthRedirect,
    connect<MapStateToPropsType,MapDispatchToPropsType,null,AppStateType>(
        mapStateToProps, {getUsers, onFollow, onUnfollow, toggleFollowingProgress, setCurrentPage})
)(UsersContainer)
