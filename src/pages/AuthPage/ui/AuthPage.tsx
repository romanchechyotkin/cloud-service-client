import React from 'react';
import AuthForm from "../../../components/AuthFrom/AuthForm";
import cls from './AuthPage.module.scss'
import {AuthFormProps} from "../../../types/authTypes";

const AuthPage = ({type}: AuthFormProps) => {
    return (
        <div className={cls.root}>
            <AuthForm type={type} />
        </div>
    );
};

export default AuthPage;
