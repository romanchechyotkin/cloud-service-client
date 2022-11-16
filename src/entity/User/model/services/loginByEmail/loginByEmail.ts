import {createAsyncThunk} from "@reduxjs/toolkit";
import {User} from "../../types/UserSchema";
import {api} from "shared/config/axios/axiosClient";
import {userActions} from "../../slice/userSlice";
import {alertActions, alertReducer} from "../../../../Alert";
import {AxiosError} from "axios";

interface LoginByEmailProps {
    email: string;
    password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps>(
    "login/loginByEmail",
    async ({email, password}, thunkAPI) => {
        // @ts-ignore
        try {
            // @ts-ignore
            const response = await api.post("/auth/login", {email, password});

            if (!response.data) {
                throw new Error();
            }

            thunkAPI.dispatch(userActions.setUser(response.data.user))

            thunkAPI.dispatch(alertActions.showAlert("вы вошли в аккаунт"))
            setTimeout(() => thunkAPI.dispatch(alertActions.closeAlert()), 3000)

            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("auth", JSON.stringify({accessToken: response.data.accessToken, refreshToken: response.data.refreshToken}));


            return response.data;
        } catch (e) {
            thunkAPI.dispatch(alertActions.showAlert("неверный пароль или почта"))
            setTimeout(() => thunkAPI.dispatch(alertActions.closeAlert()), 3000)
            return thunkAPI.rejectWithValue("email");
        }
    }
)

export const registration = async (email: string, password: string) => {
    try {
        const response = await api.post('/auth/registration', {email, password})
        alert('пользователь создан')
    } catch (e) {
        console.log(e)
        alert('error')
    }
}
