import React, {useState} from 'react';
import cls from './FileItem.module.scss'
import FileIcon from "shared/assets/file.svg"
import FolderIcon from "shared/assets/folder.svg"
import {File, fileActions, getFile} from "entity/File";
import {useDispatch, useSelector} from "react-redux";
import {FilePopup} from "../../FilePopup";
import {sizeFormat} from "shared/libs/sizeFormat/sizeFormat";

export interface FileItemProps {
    file: File
}

const FileItem: React.FC<FileItemProps> = ({file}) => {
    const dispatch = useDispatch()
    const {commonDir} = useSelector(getFile)
    const [filePopupVisible, setFilePopupVisible] = useState(false);

    const openDir = () => {
        dispatch(fileActions.pushStack(commonDir))
        dispatch(fileActions.setCommonDir(file._id))
    }

    const onClick = (e: any) => {
        e.preventDefault();

        if (e.type === 'click' && file.type === "dir") {
            openDir()
        } else if (e.type === 'contextmenu') {
            setFilePopupVisible(true)
        }
    };

    const closeFilePopup = (e: any) => {
        e.stopPropagation()
        setFilePopupVisible(false)
    }


    return (
        <div className={cls.file} onClick={onClick} onContextMenu={onClick}>
            <img src={file.type === "dir" ? FolderIcon.toString() : FileIcon.toString()} alt="image" className={cls.image}/>
            <div className={cls.name}>{file.name}</div>
            <div className={cls.date}>{file.date.slice(0, 10)}</div>
            <div className={cls.size}>{file.type === "dir" ? '' :sizeFormat(file.size)}</div>
            {filePopupVisible &&
                <FilePopup file={file} isVisible={filePopupVisible} onClose={closeFilePopup}/>
            }
        </div>
    );
};

export default FileItem;
