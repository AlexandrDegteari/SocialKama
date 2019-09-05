const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Maik', id: 1},
        {name: 'Pavel', id: 2},
        {name: 'Vladimir', id: 3},
        {name: 'Vadim', id: 4},
        {name: 'Maik', id: 5},
        {name: 'Mihai', id: 6}
    ],
    messages: [
        {message: 'Hello', id: 1},
        {message: 'How are u', id: 2},
        {message: 'What are u doing?', id: 3},
        {message: 'Where are you?', id: 4},
        {message: 'What is your favorite color?', id: 5},
        {message: 'What do you like to eat?', id: 6}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
        state.newMessageBody = action.body;
    } else if (action.type === 'SEND-MESSAGE') {
        let body = state.newMessageBody;
        state.newMessageBody = "";
        state.messages.push({message: body, id: 7});
    }
    return state;
};
export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
});
export default dialogsReducer;