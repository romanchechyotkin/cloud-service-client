import { getFile } from "./model/selectors/getFile/getFile";
import { getFileFiles } from "./model/selectors/getFileFiles/getFileFiles";
import { getFilesFromServer } from "./model/services/getFilesFromServer/getFilesFromServer";
import {fileActions, fileReducer} from "./model/slice/fileSlice";
import type {FileSchema, File} from "./model/types/file";

export {
    fileReducer,
    fileActions,
    File,
    FileSchema,
    getFilesFromServer,
    getFile,
    getFileFiles
}
