import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fileActions, getFile, getFilesFromServer} from "entity/File";
import {FileList} from "widgets/FileList";
import cls from "./Disk.module.scss"
import {PopUp} from "widgets/PopUp";

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

    return(
        <div className={cls.disk}>
            <div className={cls.diskBtn}>
                <button className={cls.btnBack} onClick={undo}>назад</button>
                <button onClick={onOpenPopup} className={cls.btnCreate}>создать папку</button>
            </div>
            <FileList />
            <PopUp isVisible={isPopupVisible} onClose={onClosePopup} />
        </div>
    );
};

export default Disk;
