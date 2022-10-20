import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {HomePage} from "pages/HomePage";
import {AuthPage} from "pages/AuthPage";
import {SettingsPage} from "pages/SettingsPage";
import {$auth, setAuth, setAuthEmail} from "./store/auth";
import {useStore} from "effector-react";
import './styles/index.scss'
import {Auth} from "widgets/AuthFrom/ui/AuthForm";

const App = () => {
    const isLoggedIn = useStore($auth)

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
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={isLoggedIn ? <h1>Files</h1> : <HomePage />} />
                    <Route path={'/registration'} element={isLoggedIn ? <Navigate to={'/'} /> : <AuthPage type={Auth.REGISTRATION}/>} />
                    <Route path={'/login'} element={isLoggedIn ? <Navigate to={'/'} /> : <AuthPage type={Auth.LOGIN}/>} />
                    <Route path={'/settings'} element={<SettingsPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
