import {createSlice} from "@reduxjs/toolkit";
import {UploaderSchema} from "../types/UploaderSchema";

const initialState: UploaderSchema = {
    isVisible: false,
    files: []
}

export const uploaderSlice = createSlice({
    name: "uploader",
    initialState,
    reducers: {
        showUploader: (state) => {
            state.isVisible = true
        },
        closeUploader: (state) => {
            state.files = []
            state.isVisible = false
        },
        setFiles: (state, action) => {
            state.files.push(action.payload)
        },
        removeFiles: (state, action) => {
            const arr = state.files.filter(file => file.id != action.payload)
            state.files = arr
        },
        updateFiles: (state, action) => {
            state.files = [...state.files.map(file => file.id == action.payload.id
                ? {...file, progress: action.payload.progress}
                : {...file}
            )]
        }
    }
})

export const {reducer: uploaderReducer} = uploaderSlice
export const {actions: uploaderActions} = uploaderSlice
