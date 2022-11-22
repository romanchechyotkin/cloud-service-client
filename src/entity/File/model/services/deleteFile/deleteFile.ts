import {createAsyncThunk} from "@reduxjs/toolkit";
import {File} from "../../types/file";
import {fileActions} from "../../slice/fileSlice";
// @ts-ignore
import {api} from "shared/config/axios/axiosClient";

export const deleteFileFromServer = createAsyncThunk(
    "files/deleteFile",
    async (file: File, thunkAPI) => {
        try {
            const response = await api.delete(`/files/delete?id=${file._id}` , {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })
            thunkAPI.dispatch(fileActions.deleteFile(file._id))
        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
