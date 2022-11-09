import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileActions} from "../../slice/fileSlice";
// @ts-ignore
import {api} from "shared/config/axios/axiosClient";
import {File} from "../../types/file";

export const createFile = createAsyncThunk(
    "files/createFile",
    async ({dirId, file}: {dirId: string, file: File}, thunkAPI) => {
        try {
            const formData = new FormData()
            // @ts-ignore
            formData.append('file', file)

            if (dirId) {
                formData.append('parent', dirId)
            }
            const response = await api.post(`/files/uploadFile`, formData,{
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`},
                onUploadProgress: function(progressEvent) {
                    // @ts-ignore
                    let percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total);
                    console.log(percentCompleted)
                }
            })
            thunkAPI.dispatch(fileActions.addFile(response.data))
        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
