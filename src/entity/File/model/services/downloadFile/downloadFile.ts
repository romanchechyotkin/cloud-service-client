import {createAsyncThunk} from "@reduxjs/toolkit";
import {File} from "../../types/file";

export const downloadFile = createAsyncThunk(
    "files/downloadFile",
    async (file: File, thunkAPI) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/files/download?id=${file._id}` , {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })

            if (response.status === 200) {
                const blob = await response.blob()
                const downloadUrl = window.URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = downloadUrl
                link.download = file.name
                document.body.appendChild(link)
                link.click()
                link.remove()
            }

        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
