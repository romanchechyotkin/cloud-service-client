import React, {Suspense, useContext, useEffect, useState} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {HomePage} from "pages/HomePage";
import {AuthPage} from "pages/AuthPage";
import {SettingsPage} from "pages/SettingsPage";
import {$auth, setAuth, setAuthEmail} from "./store/auth";
import {useStore} from "effector-react";
import {Auth} from "widgets/AuthFrom/ui/AuthForm";
import './styles/index.scss'
import {useTheme} from "./providers/ThemeProvider/lib/useTheme";

const App = () => {
    const isLoggedIn = useStore($auth)
    const {theme} = useTheme()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth') as string)
        if (!data || !data.accessToken || !data.refreshToken) {
            setAuth(false)
        } else {
            setAuth(true)
            setAuthEmail(data.user.email)
        }
    }, []);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={isLoggedIn ? <h1>Files</h1> : <HomePage />} />
                    <Route path={'/registration'} element={isLoggedIn ? <Navigate to={'/'} /> : <AuthPage type={Auth.REGISTRATION}/>} />
                    <Route path={'/login'} element={isLoggedIn ? <Navigate to={'/'} /> : <AuthPage type={Auth.LOGIN}/>} />
                    <Route path={'/settings'} element={isLoggedIn ? <SettingsPage /> : <Navigate to={'/login'} />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
