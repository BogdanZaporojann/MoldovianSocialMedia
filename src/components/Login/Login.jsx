import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validator";

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} component={Input} name={"login"} type="text" placeholder="Name"/>
            </div>
            <div>
                <Field validate={[required]} component={Input} name={"password"} type="text" placeholder="Password"/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> <span>Remember me</span>
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