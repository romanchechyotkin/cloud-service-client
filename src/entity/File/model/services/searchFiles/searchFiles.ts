import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "shared/config/axios/axiosClient"
import {fileActions} from "../../slice/fileSlice";
import {loaderActions} from "entity/Loader";

export const searchFiles = createAsyncThunk(
    "files/searchFiles",
    async (searchName: string, thunkAPI) => {
        try {
            const response = await api.get(`/files/search?searchName=${searchName}`, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })

            thunkAPI.dispatch(fileActions.setFiles(response.data))

        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        } finally {
            thunkAPI.dispatch(loaderActions.closeLoader())
        }
    }
)
