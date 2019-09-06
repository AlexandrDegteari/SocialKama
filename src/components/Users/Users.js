import React from "react";
import styles from "./users.module.css";
import * as axios from "axios";


export default class User extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>

            {
                this.props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img alt={'Naghiev'} src={u.photos.small != null ? u.photos.small :
                        "http://ib.tsu.ru/wp-content/uploads/2017/10/no-ava-300x300.png"}
                         className={styles.userPhoto}/>
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => {
                            this.props.unfollow(u.id)
                        }}>UnFollow</button>
                        : <button onClick={() => {
                            this.props.follow(u.id)
                        }}>Follow</button>}

                </div>
            </span>
                        <span>
                <span>
                   <div>
                       {u.name}
                   </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                      <div>
                        {/*{u.location.country}*/}
                    </div>
                    <div>
                        {/*{u.location.city}*/}
                    </div>
                </span>
            </span>
                    </div>
                )}
        </div>
    };
}
