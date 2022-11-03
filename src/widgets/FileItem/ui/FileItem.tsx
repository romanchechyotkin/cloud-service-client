import React from 'react';
import cls from './FileItem.module.scss'
import FileIcon from "shared/assets/file.svg"
import FolderIcon from "shared/assets/folder.svg"
import {File} from "entity/File";

export interface FileItemProps {
    file: File
}


// @ts-ignore
const FileItem: React.FC<FileItemProps> = ({file}) => {
    return (
        <div className={cls.file}>
            <img src={file.type === "dir" ? FolderIcon.toString() : FileIcon.toString()} alt="image" className={cls.image}/>
            <div className={cls.name}>{file.name}</div>
            <div className={cls.date}>{file.date.slice(0, 10)}</div>
            <div className={cls.size}>{file.size}</div>
        </div>
    );
};

export default FileItem;
