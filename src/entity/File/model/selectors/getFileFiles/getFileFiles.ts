import {createSelector} from "@reduxjs/toolkit";
import {getFile} from "../getFile/getFile";
import {FileSchema} from "../../types/file";

export const getFileFiles = createSelector(
    getFile,
    (file: FileSchema) => file.files
)
