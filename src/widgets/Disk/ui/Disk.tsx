import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fileActions, getFile, getFilesFromServer} from "entity/File";
import {FileList} from "widgets/FileList";
import cls from "./Disk.module.scss"
import {PopUp} from "widgets/PopUp";
import {createFile} from "entity/File";
import {getUploaderIsVisible, Uploader} from "entity/Uploader";
import {getLoader} from "entity/Loader";

const Disk = () => {
    const dispatch = useDispatch()
    const {commonDir, dirStack} = useSelector(getFile)
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [dragEnter, setDragEnter] = useState(false);
    const [sort, setSort] = useState("date");
    const isVisible = useSelector(getUploaderIsVisible)
    const {isLoading} = useSelector(getLoader)


    useEffect(() => {
        // @ts-ignore
        dispatch(getFilesFromServer({dirId: commonDir, sort: sort}))
    }, [commonDir, sort]);

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

    const dragEnterHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragEnter(true)
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragEnter(false)
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        setDragEnter(true)
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
        // @ts-ignore
        let files = [...e.dataTransfer.files]
        // @ts-ignore
        files.forEach(file => dispatch(createFile({file: file, dirId: commonDir})))
        setDragEnter(false)
    }

    if (isLoading) {
        return (
            <div className={cls.ldsRing}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        )
    }

    return(!dragEnter ?
        <div className={cls.disk} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragOverHandler}>
            <div className={cls.diskBtn}>
                <button className={cls.btnBack} onClick={undo}>назад</button>
                <button onClick={onOpenPopup} className={cls.btnCreate}>создать папку</button>
                <div>
                    <label className={cls.uploadLabel} htmlFor="upload">upload file</label>
                    <input multiple={true} onChange={event => fileUpload(event)} className={cls.uploadInput} id={"upload"} type="file"/>
                </div>
            </div>
            <select onChange={e => setSort(e.target.value)} value={sort} className={cls.select}>
                <option value="name">по имени</option>
                <option value="size-greater">по возрастанию размера</option>
                <option value="size-lower">по уменьшению размера</option>
                <option value="type">по типу файла</option>
                <option value="date">по дате</option>
            </select>
            <FileList />
            <PopUp isVisible={isPopupVisible} onClose={onClosePopup} />
            {isVisible && <Uploader />}
        </div>
            :
        <div className={cls.dropArea} onDrop={dropHandler} onDragEnter={dragEnterHandler} onDragLeave={dragLeaveHandler} onDragOver={dragOverHandler}>Файлы сюда</div>
    );
};

export default Disk;
