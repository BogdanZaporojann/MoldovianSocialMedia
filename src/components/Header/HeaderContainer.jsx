import React from "react";
import {Header} from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class HeaderContainer extends React.Component{

    componentDidMount() {
        this.props.getAuthUserData();
    }


    render() {

        return(
            <Header {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => ({
    login: state.auth.login,
})


export default compose(
    connect(mapStateToProps,{getAuthUserData}),
    withAuthRedirect
)(HeaderContainer)