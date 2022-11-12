import React from 'react';
import cls from './UploadFile.module.scss'
import {uploaderActions, uploaderFile} from "entity/Uploader";
import {useDispatch} from "react-redux";
import {fileActions} from "../../../entity/File";

export interface UploadFileProps {
    file: uploaderFile
}

export const UploadFile: React.FC<UploadFileProps> = ({file}) => {
    const dispatch = useDispatch()

    const closeFile = () => {
        dispatch(uploaderActions.removeFiles(file.id))
    }

    return (
        <div className={cls.uploadFile}>
            <div className={cls.uploadFileHeader}>
                <div className={cls.uploadFileName}>
                    {file.name}
                </div>
                <button onClick={closeFile} className={cls.uploadFileRemove}>x</button>
            </div>
            <div className={cls.uploadFileProgressBar}>
                <div className={cls.uploadFileBar} style={{width: `${file.progress}%`}}/>
                <div className={cls.uploadFileProgressPercent}>{file.progress}%</div>
            </div>
        </div>
    );
};
