const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {message: 'its my first post', id: 1, likesCount: 23},
        {message: 'Hi, how are you', id: 2, likesCount: 3},
    ],
    newPostText: "Enter your message"
};

const profileReducer = (state = initialState, action) => {
    if (action.type === "ADD-POST") {
        let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
        };
        state.posts.push(newPost);
        state.newPostText = "";

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        state.newPostText = action.newText;

    }
    return state;
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
export default profileReducer;

