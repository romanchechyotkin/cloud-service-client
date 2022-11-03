import React from 'react';
import cls from "./FileList.module.scss"
import {useSelector} from "react-redux";
import {getFileFiles} from "entity/File";
import {FileItem} from "widgets/FileItem";

export const FileList = () => {
    const files = useSelector(getFileFiles).map((file) => <FileItem file={file} key={file._id}/>)

    return (
        <div className={cls.fileList}>
            <div className={cls.fileListHeader}>
                <div className={cls.fileListName}>название</div>
                <div className={cls.fileListDate}>дата</div>
                <div className={cls.fileListSize}>размер</div>
            </div>
            {files}
        </div>
    );
};
