import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {Profile} from "./Profile";

class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/profile/2")
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

export default connect(mapStateToProps,{
    setUserProfile
})(ProfileContainer)