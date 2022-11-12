import {createSelector} from "@reduxjs/toolkit";
import {getUploader} from "../getUploader/getUploader";
import {UploaderSchema} from "../../types/UploaderSchema";


export const getUploaderFiles = createSelector(
    getUploader,
    (uploader: UploaderSchema) => uploader.files
)
