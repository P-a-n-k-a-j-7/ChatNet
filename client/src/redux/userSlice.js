import {createSlice} from '@reduxjs/toolkit';
import Login from './../pages/Login';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) ?? {},
    edit: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action)  {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        logout(state, action) {
            state.user = null;
            localStorage.removeItem('user');
        },
        updateProfile(state, action) {
            state.edit = action.payload;
        },
    },
});
export default userSlice.reducer;

export function UserLogin(user) {
    return (dispatch, getState) => {
        dispatch(userSlice.actions.login(user));
    };
}

export function UserLogout() {
    return (dispatch, getState) => {
        dispatch(userSlice.actions.logout());
    };
}