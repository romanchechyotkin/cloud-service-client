import {createSlice} from "@reduxjs/toolkit";
import {FileSchema} from "../types/file";
import {loginByEmail} from "../../../User/model/services/loginByEmail/loginByEmail";
import {getFilesFromServer} from "../services/getFilesFromServer/getFilesFromServer";

const initialState: FileSchema = {
    files: [],
    commonDir: null
}

export const fileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        setCommonDir: (state, action) => {
            state.commonDir = action.payload
        },
        setFiles: (state, action) => {
            state.files = action.payload
        }
    }
})

export const {reducer: fileReducer} = fileSlice
export const {actions: fileActions} = fileSlice