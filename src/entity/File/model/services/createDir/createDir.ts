import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileActions} from "../../slice/fileSlice";
// @ts-ignore
import {api} from "shared/config/axios/axiosClient";


export const createDir = createAsyncThunk(
    "files/createDir",
    async ({dirId, name}: {dirId: string, name: string}, thunkAPI) => {
        try {
            const response = await api.post(`/files`, {name, parent: dirId, type: "dir"},{
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })

            console.log(response.data)
            thunkAPI.dispatch(fileActions.addFile(response.data))

        } catch (e) {
            console.log(e);
            return thunkAPI.rejectWithValue("error");
        }
    }
)
