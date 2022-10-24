import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Profile} from "./Profile";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`)
            .then(result => {
                debugger
                this.props.setUserProfile(result.data)
            })
    }

    render() {
        return(
            <Profile profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let WithRouteProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps,{setUserProfile})(WithRouteProfileContainer);