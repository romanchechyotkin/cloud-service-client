import React from 'react';
import cls from './Alert.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {getAlert} from "../model/selectors/getAlert/getAlert";
import {alertActions} from "../model/slice/alertSlice";

const Alert = () => {
    const {message, isAlertVisible} = useSelector(getAlert)
    const dispatch = useDispatch()

    return (
        <div className={cls.alert}>
            {message}
        </div>
    );
};

export default Alert;
