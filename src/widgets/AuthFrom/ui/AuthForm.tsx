import React, {FC, useEffect, useState} from 'react';
import cls from './AuthForm.module.scss'
import {login, registration} from "api/authClient";
import {Auth, AuthFormProps} from "app/types/authTypes";
import {Link} from "react-router-dom";

const AuthForm: FC<AuthFormProps> = ({type}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('нельзя оставлять пустым');
    const [passwordError, setPasswordError] = useState('нельзя оставлять пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]);

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

    const blurHandle = (e: React.FocusEvent<HTMLInputElement>) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('некорректная почта')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
        if (e.target.value.length < 5 || e.target.value.length > 16) {
            setPasswordError('пароль должен быть длиннее 5 и короче 16 символов')
            if (!e.target.value) {
                setPasswordError('нельзя оставлять пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    return (
        <div className={cls.container}>
            {type === 'registration' ?
                <h2 className={cls.authTitle}>Registration</h2>
            :
                <h2 className={cls.authTitle}>Login</h2>
            }
            <label className={cls.authLabel}>
                {(emailDirty && emailError) ? <div style={{color: "red"}}>{emailError}</div> : <>email</>}
                <input
                    name='email'
                    className={cls.formControl}
                    value={email}
                    onBlur={e => blurHandle(e)}
                    onChange={e => emailHandler(e)}
                    type="text"
                />
            </label>
            <label className={cls.authLabel}>
                {(passwordDirty && passwordError) ?  <div style={{color: "red"}}>{passwordError}</div> : <>password</>}
                <input
                    name='password'
                    className={cls.formControl}
                    value={password}
                    onBlur={e => blurHandle(e)}
                    onChange={e => passwordHandler(e)}
                    type="password"
                />
            </label>
            <button disabled={!formValid} className={cls.authBtn} onClick={handleAuth}>ok</button>
            {type === 'registration' ?
                <p>есть аккаунт? <Link to={'/login'}>Войди</Link></p>
            :
                <p>нет аккаунта? <Link to={'/registration'}>Зарегай</Link></p>
            }
        </div>

    );
};

export default AuthForm;
