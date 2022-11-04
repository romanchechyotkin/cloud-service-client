import React, {useState} from 'react';
import cls from './PopUp.module.scss'
import {classNames} from "shared/libs/classNames/classNames";
import {createDir, getFile} from "entity/File";
import {useDispatch, useSelector} from "react-redux";

export interface PopUpProps {
    isVisible: boolean;
    onClose: () => void;
}

export const PopUp: React.FC<PopUpProps> = ({isVisible, onClose}) => {
    const [dirName, setDirName] = useState('');
    const dispatch = useDispatch()
    const {commonDir} = useSelector(getFile)

    const dirNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDirName(e.target.value)
    }

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const addFolder = () => {
        // @ts-ignore
        dispatch(createDir({name: dirName, dirId: commonDir}))
        onClose()
    }

    return (
        <div className={classNames(cls.popup, {[cls.opened]: isVisible}, [])}>
            <div onClick={onClose} className={cls.overlay}>
                <div onClick={onContentClick} className={cls.popupContent}>
                    <div className={cls.popupHeader}>
                        <div className={cls.popupTitle}>
                            новая папка
                        </div>
                    </div>
                    <input value={dirName} onChange={dirNameHandler} type="text" placeholder={"без названия"}/>
                    <div className={cls.buttons}>
                        <button onClick={onClose}>cancel</button>
                        <button onClick={addFolder}>create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
