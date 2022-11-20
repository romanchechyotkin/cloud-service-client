import {createAsyncThunk} from "@reduxjs/toolkit";
import {fileActions} from "../../slice/fileSlice";
// @ts-ignore
import {api} from "shared/config/axios/axiosClient";
import {File} from "../../types/file";
import {uploaderActions} from "../../../../Uploader";

export const createFile = createAsyncThunk(
    "files/createFile",
    async ({dirId, file}: {dirId: string, file: File}, thunkAPI) => {
        try {
            const formData = new FormData()
            console.log(file)
            // @ts-ignore
            formData.append('file', file)

            if (dirId) {
                formData.append('parent', dirId)
            }

            const uploadFile = {name: file.name, progress: 0, id: Date.now()}

            thunkAPI.dispatch(uploaderActions.showUploader())
            thunkAPI.dispatch(uploaderActions.setFiles(uploadFile))

            const response = await api.post(`/files/uploadFile`, formData,{
                headers: {Authorization: `Bearer ${JSON.parse(localStorage.getItem('auth') as string).accessToken}`},
                onUploadProgress: function(progressEvent) {
                    Object.freeze(uploadFile);
                    const objCopy = {...uploadFile};
                    // @ts-ignore
                    objCopy.progress = Math.round( (progressEvent.loaded * 100) / progressEvent.total);
                    thunkAPI.dispatch(uploaderActions.updateFiles(objCopy))
                }
            })
            thunkAPI.dispatch(fileActions.addFile(response.data.file))
        } catch (e) {
            return thunkAPI.rejectWithValue("error");
        }
    }
)
