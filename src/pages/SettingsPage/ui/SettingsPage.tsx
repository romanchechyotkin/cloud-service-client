import React from 'react';
import '@jetbrains/ring-ui/dist/style.css';

// @ts-ignore
import alertService from '@jetbrains/ring-ui/dist/alert-service/alert-service';
// @ts-ignore
import Button from '@jetbrains/ring-ui/dist/button/button';
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
            jetbrains ui components
            <Button onClick={() => alertService.successMessage('Hello world')}>
                Click me
            </Button>
            <div>
                <input onChange={e => avatar(e)} accept={"image/*"} placeholder={'upload'} type="file"/>
            </div>
        </div>

    );
};

