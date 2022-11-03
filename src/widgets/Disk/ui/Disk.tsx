import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getFile, getFilesFromServer} from "entity/File";
import {FileList} from "widgets/FileList";
import cls from "./Disk.module.scss"

const Disk = () => {
    const dispatch = useDispatch()
    const {commonDir} = useSelector(getFile)

    useEffect(() => {
        // @ts-ignore
        dispatch(getFilesFromServer(commonDir))
    }, []);

    return(
        <div className={cls.disk}>
            <div className={cls.diskBtn}>
                <button className={cls.btnBack}>назад</button>
                <button className={cls.btnCreate}>создать папку</button>
            </div>
            <FileList />
        </div>
    );
};

export default Disk;
