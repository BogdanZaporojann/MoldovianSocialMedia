import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";
import {login, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import styles from './../common/FormsControls/FormsControle.module.css'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name={"email"} type="text" placeholder="Name"/>
            </div>
            <div>
                <Field validate={[required]} component={Input} name={"password"} type="text" placeholder="Password"/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> <span>Remember me</span>
            </div>
            {props.error && <div className={styles.formSummaryError}>
                {props.error}
            </div>
            }
            <button>Send</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'loginForm'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
        let {email, password, rememberMe} = formData
        props.login(email,password,rememberMe);
    }
    if(props.isAuth){
        return <Redirect to="/profile"/>
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})



export default connect(mapStateToProps,{login,logout})(Login)