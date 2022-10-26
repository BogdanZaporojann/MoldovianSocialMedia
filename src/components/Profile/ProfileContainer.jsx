import React from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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

    }


    render() {
        return(
            <Profile profile={this.props.profile}/>
        );
    }
}



const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps,{getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)