import React, {Suspense, useEffect} from 'react';
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss'
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from "../pages/HomePage";
import {SettingsPage} from "../pages/SettingsPage";
import {AuthPage} from "../pages/AuthPage";
import {Auth} from "../widgets/AuthFrom/ui/AuthForm";

const App = () => {
    const {theme} = useTheme()

    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem('auth') as string)
    //     if (!data || !data.accessToken || !data.refreshToken) {
    //         setAuth(false)
    //     } else {
    //         setAuth(true)
    //         setAuthEmail(data.user.email)
    //     }
    // }, []);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<div>loading...</div>}>
                {/*<Routes>*/}
                {/*    <Route path={'/'} element={ ? <h1>Files</h1> : <HomePage />} />*/}
                {/*    <Route path={'/registration'} element={ ? <Navigate to={'/'} /> : <AuthPage type={Auth.REGISTRATION}/>} />*/}
                {/*    <Route path={'/login'} element={ ? <Navigate to={'/'} /> : <AuthPage type={Auth.LOGIN}/>} />*/}
                {/*    <Route path={'/settings'} element={ ? <SettingsPage /> : <Navigate to={'/login'} />} />*/}
                {/*</Routes>*/}
            </Suspense>
        </div>
    );
};

export default App;
