import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth";

class HeaderContainer extends React.Component{

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me",{withCredentials: true})
            .then(result =>  {
                if(result.data.resultCode === 0) {
                    let {id,login, email} = result.data.data;
                    this.props.setAuthUserData(id,login,email)
                }
            })
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

export default connect(mapStateToProps,{setAuthUserData})(HeaderContainer)