import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fileActions, getFile, getFilesFromServer} from "entity/File";
import {FileList} from "widgets/FileList";
import cls from "./Disk.module.scss"
import {PopUp} from "widgets/PopUp";
import {createFile} from "entity/File";

const Disk = () => {
    const dispatch = useDispatch()
    const {commonDir, dirStack} = useSelector(getFile)
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    useEffect(() => {
        // @ts-ignore
        dispatch(getFilesFromServer(commonDir))
    }, [commonDir]);

    const onClosePopup = () => {
        setIsPopupVisible(false)
    }

    const onOpenPopup = () => {
        setIsPopupVisible(true)
    }

    const undo = () => {
        dispatch(fileActions.popStack())
        dispatch(fileActions.setCommonDir(dirStack[dirStack.length - 1]))
    }

    const fileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const files = [...e.target.files]
        // @ts-ignore
        files.forEach(file => dispatch(createFile({file: file, dirId: commonDir})))
    }

    return(
        <div className={cls.disk}>
            <div className={cls.diskBtn}>
                <button className={cls.btnBack} onClick={undo}>назад</button>
                <button onClick={onOpenPopup} className={cls.btnCreate}>создать папку</button>
                <div>
                    <label className={cls.uploadLabel} htmlFor="upload">upload file</label>
                    <input multiple={true} onChange={event => fileUpload(event)} className={cls.uploadInput} id={"upload"} type="file"/>
                </div>
            </div>
            <FileList />
            <PopUp isVisible={isPopupVisible} onClose={onClosePopup} />
        </div>
    );
};

export default Disk;
