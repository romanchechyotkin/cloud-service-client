import React from 'react';
import cls from './FileItem.module.scss'
import FileIcon from "shared/assets/file.svg"
import FolderIcon from "shared/assets/folder.svg"
import {File, fileActions, getFile} from "entity/File";
import {useDispatch, useSelector} from "react-redux";

export interface FileItemProps {
    file: File
}

const FileItem: React.FC<FileItemProps> = ({file}) => {
    const dispatch = useDispatch()
    const {commonDir} = useSelector(getFile)

    const openDir = () => {
        dispatch(fileActions.pushStack(commonDir))
        dispatch(fileActions.setCommonDir(file._id))
    }

    return (
        <div className={cls.file} onClick={file.type === "dir" ? openDir : undefined}>
            <img src={file.type === "dir" ? FolderIcon.toString() : FileIcon.toString()} alt="image" className={cls.image}/>
            <div className={cls.name}>{file.name}</div>
            <div className={cls.date}>{file.date.slice(0, 10)}</div>
            <div className={cls.size}>{file.size}</div>
        </div>
    );
};

export default FileItem;
