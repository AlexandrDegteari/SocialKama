import React from "react";
import c from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img
                    src="https://cn.opendesktop.org/img/8/6/1/2/e471cf130efb6c2b008102638db0db5225c9.jpg"
                    alt=""/>
            </div>
            <div className={c.descriptionBlock}>
                    avatar+desripton
            </div>

        </div>


    );
};

export default ProfileInfo;