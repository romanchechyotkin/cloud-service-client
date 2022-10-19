import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Navbar from "widgets/Navbar/ui/Navbar";
import {HomePage} from "pages/HomePage";
import {AuthPage} from "pages/AuthPage";
import {Auth} from "./types/authTypes";
import {$auth, setAuth} from "../store/auth";
import {useStore} from "effector-react";
import './styles/style.scss'

const App = () => {
    const isLoggedIn = useStore($auth)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth') as string)
        if (!data || !data.accessToken || !data.refreshToken) {
            setAuth(false)
        } else {
            setAuth(true)
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
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
