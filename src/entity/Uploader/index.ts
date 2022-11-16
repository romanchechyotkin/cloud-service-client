import { getUploader } from "./model/selectors/getUploader/getUploader";
import { getUploaderFiles } from "./model/selectors/getUploaderFiles/getUploaderFiles";
import { getUploaderIsVisible } from "./model/selectors/getUploaderIsVisible/getUploaderIsVisible";
import {uploaderReducer, uploaderActions, uploaderSlice } from "./model/slice/uploaderSlice";
import {uploaderFile, UploaderSchema } from "./model/types/UploaderSchema";
import {Uploader} from "./ui/Uploader"

export type {
    UploaderSchema,
    uploaderFile
}

export {
    Uploader,
    uploaderSlice,
    uploaderReducer,
    uploaderActions,
    getUploader,
    getUploaderIsVisible,
    getUploaderFiles,
}
