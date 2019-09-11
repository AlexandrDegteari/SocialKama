import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    // if (!props.profile){
    //     return <Preloader/>
    // }
        return (
            <div>
                <div className={c.descriptionBlock}>
                    {/*<img alt={'avatar'} src={props.profile.photos.large}/>*/}
                    <ProfileStatus status={'Hello my friends'}/>
                </div>
            </div>


        );
};

export default ProfileInfo;