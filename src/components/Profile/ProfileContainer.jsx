import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus, updateUserPersonalInfo, savePhoto} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "../common/withRouterHook";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{


    refreshProfile(){
        let userId = this.props.router.params.userId;
        if(!userId) {
            userId = this.props.authorizedUserId||2;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.router.params.userId !== this.props.router.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return(
            <>
                <Profile isOwner={ !this.props.router.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         savePhoto={this.props.savePhoto}
                         updateUserPersonalInfo={this.props.updateUserPersonalInfo}
                         updateUserStatus={this.props.updateUserStatus}/>
            </>

        );
    }
}



const mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId
    })
}

export default compose(
    connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus, updateUserPersonalInfo, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)