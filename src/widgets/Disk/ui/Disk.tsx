import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFile, getFilesFromServer} from "entity/File";
import {FileList} from "widgets/FileList";
import cls from "./Disk.module.scss"
import {createDir} from "entity/File/model/services/createDir/createDir";
import {PopUp} from "widgets/PopUp";

const Disk = () => {
    const dispatch = useDispatch()
    const {commonDir} = useSelector(getFile)
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const onClosePopup = () => {
        setIsPopupVisible(false)
    }

    const onOpenPopup = () => {
        setIsPopupVisible(true)
    }

    useEffect(() => {
        // @ts-ignore
        dispatch(getFilesFromServer(commonDir))
    }, []);

    return(
        <div className={cls.disk}>
            <div className={cls.diskBtn}>
                <button className={cls.btnBack}>назад</button>
                <button onClick={onOpenPopup} className={cls.btnCreate}>создать папку</button>
            </div>
            <FileList />
            <PopUp isVisible={isPopupVisible} onClose={onClosePopup} />
        </div>
    );
};

export default Disk;
