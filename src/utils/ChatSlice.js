import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_LIMIT } from './constants';

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_LIMIT,1); //The splice() method adds/removes items to/from an array, and returns the removed item(s).
            //The unshift() method adds new elements to the beginning of an array.
            state.messages.unshift(action.payload);
        }
    }
});

export default ChatSlice.reducer;
export const { addMessage } = ChatSlice.actions;