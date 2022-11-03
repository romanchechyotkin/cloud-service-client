import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "shared/config/axios/axiosClient"
import {fileActions} from "../../slice/fileSlice";

export const getFilesFromServer = createAsyncThunk(
    "files/getFilesFromServer",
    async (dirId: string, thunkAPI) => {
        try {
            const response = await axios.get(`/files${dirId ? '?parent='+dirId : ''}`, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })

            thunkAPI.dispatch(fileActions.setFiles(response.data))
        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("error");
        }
    }
)
