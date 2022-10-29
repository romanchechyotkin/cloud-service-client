import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {User} from "../../types/UserSchema";

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps>(
    "login/loginByEmail",
    async ({email, password}, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:5000/auth/login", {email, password});

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem("auth", JSON.stringify(response.data));

            return response.data;
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("email");
        }
    }
)
