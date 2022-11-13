import {createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "shared/config/axios/axiosClient"
import {fileActions} from "../../slice/fileSlice";
import {loaderActions} from "entity/Loader";

export const getFilesFromServer = createAsyncThunk(
    "files/getFilesFromServer",
    async ({dirId, sort}: {dirId: string, sort: string}, thunkAPI) => {
        try {
            thunkAPI.dispatch(loaderActions.showLoader())
            let url = `http://localhost:5000/files`
            if (dirId) {
                url = `http://localhost:5000/files?parent=${dirId}`
            }
            if (sort) {
                url = `http://localhost:5000/files?sort=${sort}`
            }
            if (dirId && sort) {
                url = `http://localhost:5000/files?parent=${dirId}&sort=${sort}`
            }
            const response = await api.get(url, {
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`}
            })

            thunkAPI.dispatch(fileActions.setFiles(response.data))

        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        } finally {
            thunkAPI.dispatch(loaderActions.closeLoader())
        }
    }
)
