import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"input"} name={"login"} type="text" placeholder="Name"/>
            </div>
            <div>
                <Field component={"input"} name={"password"} type="text" placeholder="Password"/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type="checkbox"/> <span>Remember me</span>
            </div>
            <button>Send</button>
        </form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </>
    );
}