import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redax/auth-reducer";

class HeaderComponent extends React.Component {
    componentDidMount() {
       this.props.getAuthUserData();
    }

    render() {

        return <Header {...this.props}/>

    };
}

const mapStatetoProps = (state) => ({
    isAuth: state.auth.isAuth,
    login:state.auth.login
});
export default connect(mapStatetoProps, {getAuthUserData})(HeaderComponent);