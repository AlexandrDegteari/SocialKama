import React from "react";
import p from './MyPosts.module.css'
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";


let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newPostText'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};
let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {
    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };
    let postsElement =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);


    return (
        <div className={p.postsBlock}>
            <h3>My Posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={p.posts}>
                {postsElement}
            </div>
        </div>
    );
};

export default MyPosts;