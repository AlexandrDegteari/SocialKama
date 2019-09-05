import React from "react";
import c from './Profile.module.css'
import MyPosts from "./Myposts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import store from "../../Redax/store";
import MyPostsContainer from "./Myposts/MyPostsContainer";




const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store = {props.store}/>

        </div>


    );
};

export default Profile;