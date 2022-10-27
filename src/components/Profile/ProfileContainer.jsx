import React from "react";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {

        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 25824;
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }


    render() {
        return(
            <Profile profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        );
    }


}



const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose(
    connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)