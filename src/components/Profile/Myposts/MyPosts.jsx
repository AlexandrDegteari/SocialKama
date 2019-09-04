import React from "react";
import p from './MyPosts.module.css'
import Post from "./post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redax/State";


const MyPosts = (props) => {
    // debugger;
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };
    let postsElement =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // eslint-disable-next-line no-undef
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
        console.log(text)
    };
    return (
        <div className={p.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {postsElement}

            </div>

        </div>

    );
};

export default MyPosts;