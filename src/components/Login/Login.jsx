import React from "react";
import {login, logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Field, Form, Formik} from "formik";
import {Navigate} from "react-router-dom";


const Login = (props) => {





    return (
        props.isAuth
            ? <Navigate to="/profile" />
            : <div>
            <h1>Login</h1>
            <Formik initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captchaUrl: ''
            }} onSubmit={({email,password,rememberMe,captchaUrl})=>{
                {props.login(email,password,rememberMe,captchaUrl)}
            }}>

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
                            {<Field type="text" name="captchaUrl" onChange={props.handleChange}></Field>}
                        </div>
                        <div>
                            <button type="submit">send</button>
                        </div>
                    </Form>
                )}
            </Formik>
            {props.isAuth ? null: <div>
                <img src={props.captchaUrl}/>
            </div>}
        </div>
    );
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})




export default connect(mapStateToProps,{login,logout})(Login)