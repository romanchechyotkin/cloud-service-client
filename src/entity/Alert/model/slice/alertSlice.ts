import {createSlice} from "@reduxjs/toolkit";
import {AlertSchema} from "../types/alertSchema";

const initialState: AlertSchema = {
    isAlertVisible: false,
    message: '',
}

export const alertSlice = createSlice({
    name: "alert",
    initialState,
    reducers: {
        showAlert: (state, action) => {
            state.isAlertVisible = true
            state.message = action.payload
        },
        closeAlert: (state) => {
            state.isAlertVisible = false
            state.message = ''
        }
    }
})

export const {reducer: alertReducer} = alertSlice
export const {actions: alertActions} = alertSlice
