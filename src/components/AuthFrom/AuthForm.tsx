import React, {FC, useState} from 'react';
import cls from './AuthForm.module.scss'
import {login, registration} from "../../api/authClient";
import {Auth, AuthFormProps} from "../../types/authTypes";
import {Link} from "react-router-dom";

const AuthForm: FC<AuthFormProps> = ({type}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleAuth = async () => {
        switch (type) {
            case Auth.LOGIN:
                await login(email, password)
                break

            case Auth.REGISTRATION:
                await registration(email, password)
                break

            default:
                break
        }
    }

    return (
        <div className={cls.container}>
            {type === 'registration' ?
                <h2>Registration</h2>
            :
                <h2>Login</h2>
            }
            <label className={cls.authLabel}>
                email
                <input className={cls.formControl} value={email} onChange={(e) => (setEmail(e.target.value))} type="text"/>
            </label>
            <label className={cls.authLabel}>
                password
                <input className={cls.formControl} value={password} onChange={(e) => (setPassword(e.target.value))} type="password"/>
            </label>
            <button className={cls.authBtn} onClick={handleAuth}>ok</button>
            {type === 'registration' ?
                <p>есть аккаунт? <Link to={'/login'}>Войди</Link></p>
            :
                <p>нет аккаунта? <Link to={'/registration'}>Зарегай</Link></p>
            }
        </div>

    );
};

export default AuthForm;
