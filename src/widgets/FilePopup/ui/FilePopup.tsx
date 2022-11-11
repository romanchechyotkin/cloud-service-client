import React from 'react';
import {File} from "entity/File";
import {classNames} from "shared/libs/classNames/classNames";
import cls from './FilePopup.module.scss'
import {useDispatch} from "react-redux";
import {downloadFile} from "entity/File";
import {deleteFileFromServer} from "entity/File";

export interface FilePopup {
    file: File;
    isVisible: boolean;
    onClose: (e: any) => void;
}

export const FilePopup: React.FC<FilePopup> = ({file, isVisible, onClose}) => {
    const dispatch = useDispatch()

    const download = (e: any) => {
        e.stopPropagation()
        // @ts-ignore
        dispatch(downloadFile(file))
        onClose(e)
    }

    const fileDelete = (e: any) => {
        e.stopPropagation()
        // @ts-ignore
        dispatch(deleteFileFromServer(file))
        onClose(e)
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <div className={classNames(cls.filePopup, {[cls.opened]: isVisible}, [])}>
            <div onClick={onClose} className={cls.fileOverlay}>
                <div onClick={onContentClick} className={cls.fileContent}>
                    <button onClick={download}>download</button>
                    <button onClick={fileDelete}>delete</button>
                </div>
            </div>
        </div>
    );
};


