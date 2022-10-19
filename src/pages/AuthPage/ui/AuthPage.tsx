import React from 'react';
import AuthForm from "../../../widgets/AuthFrom/ui/AuthForm";
import cls from './AuthPage.module.scss'
import {AuthFormProps} from "../../../app/types/authTypes";

const AuthPage = ({type}: AuthFormProps) => {
    return (
        <div className={cls.root}>
            <AuthForm type={type} />
        </div>
    );
};

export default AuthPage;
