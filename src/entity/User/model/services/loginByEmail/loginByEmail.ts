import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../types/UserSchema";
import {api} from "shared/config/axios/axiosClient";
import {userActions} from "../../slice/userSlice";

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps>(
    "login/loginByEmail",
    async ({email, password}, thunkAPI) => {
        try {
            // @ts-ignore
            const response = await api.post("/auth/login", {email, password});

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setUser(response.data.user))
            localStorage.setItem("auth", JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("email");
        }
    }
)

export const registration = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/registration', {email, password})
        console.log(response.data)
    } catch (e) {
        console.log(e)
    }
}
