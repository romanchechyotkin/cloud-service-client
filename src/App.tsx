import React, {Suspense, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {HomePage} from "./pages/HomePage";
import {AuthPage} from "./pages/AuthPage";
import {Auth} from "./types/authTypes";
import {$auth, setAuth} from "./store/auth";
import './style.scss'
import {useStore} from "effector-react";

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
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/registration'} element={isLoggedIn ? <h1>hello</h1> : <AuthPage type={Auth.REGISTRATION}/>} />
                    <Route path={'/login'} element={isLoggedIn ? <h1>hello</h1> : <AuthPage type={Auth.LOGIN}/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;
