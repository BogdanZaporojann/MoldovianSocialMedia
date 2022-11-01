import React from "react";
import {Header} from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{

    componentDidMount() {

    }


    render() {

        return(
            <Header {...this.props}/>
        );
    }

}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth
})


export default compose(
    connect(mapStateToProps,{getAuthUserData, logout}),
    withAuthRedirect
)(HeaderContainer)