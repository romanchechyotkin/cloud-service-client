import React from 'react';
import {AuthForm, AuthFormProps} from "widgets/AuthFrom/ui/AuthForm";
import cls from './AuthPage.module.scss'

const AuthPage = ({type}: AuthFormProps) => {
    return (
        <div className={cls.root}>
            <AuthForm type={type} />
        </div>
    );
};

export default AuthPage;
