import {createSelector} from "@reduxjs/toolkit";
import {getUploader} from "../getUploader/getUploader";
import {UploaderSchema} from "../../types/UploaderSchema";


export const getUploaderIsVisible = createSelector(
    getUploader,
    (uploader: UploaderSchema) => uploader.isVisible
)
