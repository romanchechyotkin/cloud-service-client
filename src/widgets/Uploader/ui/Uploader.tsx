import React from 'react';
import cls from './Uploader.module.scss'
import {UploadFile} from "widgets/UploadFile";
import {useDispatch, useSelector} from "react-redux";
import {getUploaderFiles, uploaderActions} from "entity/Uploader";

export const Uploader = () => {
    const files = useSelector(getUploaderFiles)
    const dispatch = useDispatch()

    const closeUploader = () => {
        dispatch(uploaderActions.closeUploader())
    }

    return (
        <div className={cls.uploader}>
            <div className={cls.uploaderHeader}>
                <div className={cls.uploaderTitle}>загрузки</div>
                <button onClick={closeUploader} className={cls.uploaderClose}>x</button>
            </div>
            {files.map(file =>
                <UploadFile key={file.id} file={file}/>
            )}
        </div>
    );
};

