import React, {FC} from 'react';
import cls from './ModelWindow.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useStore} from "effector-react";
import {$authEmail} from "app/store/auth";
import Avatar from 'shared/assets/avatar.png'
import {useTheme} from "../../../app/providers/ThemeProvider/lib/useTheme";

interface ModelWindowProps {
    logout: () => void;
    setVisible: (b: boolean) => void
}

// @ts-ignore
const ModelWindow: FC<ModelWindowProps> = ({logout, setVisible}) => {
    const userEmail = useStore($authEmail)
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cls.modelWindow}>
            <div className={cls.profile}>
                <p>{userEmail.split('@')[0]}</p>
                <img src={Avatar} className={cls.icon}/>
            </div>
            <AppLink onClick={() => setVisible(false)} to={'/settings'}>settings</AppLink>
            <p>theme: <button onClick={toggleTheme}>{theme}</button> </p>
            <button className={cls.modelWindowBtn} onClick={logout}>logout</button>
        </div>
    );
};

export default ModelWindow;
