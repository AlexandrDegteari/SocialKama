import React from "react";
import c from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader/>
    }
        return (
            <div>
                <div className={c.descriptionBlock}>
                    <img alt={'avatar'} src={props.profile.photos.large!= null ? props.profile.photos.large :
                        "http://ib.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>


        );
};

export default ProfileInfo;