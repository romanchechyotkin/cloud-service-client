import React, {FC} from 'react';
import cls from './ProfileWindow.module.scss'
import {AppLink} from "shared/ui/AppLink/AppLink";
import Avatar from 'shared/assets/avatar.png'
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {useSelector} from "react-redux";
import {getUser} from "../../../entity/User";

interface ModelWindowProps {
    logout: () => void;
    setVisible: (b: boolean) => void
}

export const ProfileWindow: FC<ModelWindowProps> = ({logout, setVisible}) => {
    const {theme, toggleTheme} = useTheme()
    const {email} = useSelector(getUser)

    return (
        <div className={cls.modelWindow}>
            <div className={cls.profile}>
                <p>{email.split('@')[0]}</p>
                <img src={Avatar} className={cls.icon}/>
            </div>
            <AppLink onClick={() => setVisible(false)} to={'/settings'}>settings</AppLink>
            <p>theme: <button onClick={toggleTheme}>{theme}</button> </p>
            <button className={cls.modelWindowBtn} onClick={logout}>logout</button>
        </div>
    );
};
