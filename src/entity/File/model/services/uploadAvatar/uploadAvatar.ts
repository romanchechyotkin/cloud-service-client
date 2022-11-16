import {createAsyncThunk} from "@reduxjs/toolkit";
// @ts-ignore
import {api} from "shared/config/axios/axiosClient";
import {userActions} from "../../../../User";

export const uploadAvatar = createAsyncThunk(
    "files/uploadAvatar",
    async (file, thunkAPI) => {
        try {
            const formData = new FormData()
            // @ts-ignore
            formData.append('file', file)

            const response = await api.post(`/files/avatar`, formData,{
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`},
            })

            localStorage.setItem("user", JSON.stringify(response.data))
            thunkAPI.dispatch(userActions.setUser(response.data))

        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
