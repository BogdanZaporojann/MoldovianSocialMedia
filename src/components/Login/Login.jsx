import React from "react";
import {getCaptchaUrl, login, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";


const Login = (props) => {


    return (
        <>
            <h1>Login</h1>
            <Formik initialValues={{
                email: '',
                password: '',
                rememberMe: false,
            }} onSubmit={({email,password,rememberMe})=>{props.login(email,password,rememberMe)}}>

                {props => (
                    <Form>
                        <div>
                            <Field onChange={props.handleChange} type="text" name="email"/>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} type="text" name="password"/>
                        </div>
                        <div>
                            <Field onChange={props.handleChange} type="checkbox" name="rememberMe"/>
                        </div>
                        <div>
                            <button type="submit">send</button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})




export default connect(mapStateToProps,{login,logout,getCaptchaUrl})(Login)