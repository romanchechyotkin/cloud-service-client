import {createSlice} from "@reduxjs/toolkit";
import {LoaderSchema} from "../types/loaderSchema";

const initialState: LoaderSchema = {
    isLoading: false
}

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true
        },
        closeLoader: (state) => {
            state.isLoading = false
        }
    }
})

export const {reducer: loaderReducer} = loaderSlice
export const {actions: loaderActions} = loaderSlice
