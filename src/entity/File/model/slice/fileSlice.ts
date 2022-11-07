import {createSlice} from "@reduxjs/toolkit";
import {FileSchema} from "../types/file";

const initialState: FileSchema = {
    files: [],
    commonDir: null,
    dirStack: []
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
        },
        addFile: (state, action) => {
            state.files.push(action.payload)
        },
        pushStack: (state, action) => {
            state.dirStack.push(action.payload)
        },
        popStack: (state) => {
            state.dirStack.pop()
        }
    }
})

export const {reducer: fileReducer} = fileSlice
export const {actions: fileActions} = fileSlice
