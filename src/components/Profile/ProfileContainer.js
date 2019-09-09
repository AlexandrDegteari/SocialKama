import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redax/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID =this.props.match.params.userID;
        if(!userID){
            userID=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/ `+userID)
            .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render() {
        return (
            <div>
                <div>
                   <Profile {...this.props} profile={this.props.profile}/>
                </div>
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps,{setUserProfile})(WithUrlDataContainerComponent)