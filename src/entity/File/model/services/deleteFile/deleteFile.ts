import {createAsyncThunk} from "@reduxjs/toolkit";
import {File} from "../../types/file";
import axios from "axios";
import {fileActions} from "../../slice/fileSlice";

export const deleteFileFromServer = createAsyncThunk(
    "files/deleteFile",
    async (file: File, thunkAPI) => {
        try {
            const response = await axios.delete(`http://localhost:5000/files/delete?id=${file._id}` , {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })
            thunkAPI.dispatch(fileActions.deleteFile(file._id))
        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
