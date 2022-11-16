import {createSlice} from "@reduxjs/toolkit";
import {UserSchema} from "../types/UserSchema";
import {loginByEmail} from "../services/loginByEmail/loginByEmail";

const initialState: UserSchema = {
    isAuth: false,
    email: '',
    currentUser: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout: (state) => {
            localStorage.removeItem("auth");
            state.isAuth = false
            state.email = ''
        },
        initUser: (state) => {
            state.isAuth = true
            const authData = JSON.parse(localStorage.getItem("user") as string)
            state.email = authData.email
        },
        setUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByEmail.pending, (state) => {
                state.isAuth = false
            })
            .addCase(loginByEmail.fulfilled, (state) => {
                state.isAuth = true;
                const authData = JSON.parse(localStorage.getItem("auth") as string)
                state.email = authData.user.email
            })
            .addCase(loginByEmail.rejected, (state, action) => {
                state.isAuth = false
            });
    }
});

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;
