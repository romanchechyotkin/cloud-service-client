import React from 'react';
import {useDispatch} from "react-redux";
import {uploadAvatar} from "entity/File";

export const SettingsPage = () => {
    const dispatch = useDispatch()

    const avatar = (e: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        const file = e.target.files[0]
        // @ts-ignore
        dispatch(uploadAvatar(file))
    }

    return (
        <div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                изменить аватар
                <input onChange={e => avatar(e)} accept={"image/*"} placeholder={'upload'} type="file"/>
            </div>
        </div>
    );
};

