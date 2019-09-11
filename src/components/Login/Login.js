import React from 'react'
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="text" placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field type="text" placeholder={'Password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field component={'input'} type="checkbox" name="rememberMe"/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
};
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);
const Login = (props) => {
    const onSubmit = (formData) => {
      console.log(formData)
    };
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

export default Login;
