import React, {Suspense, useEffect} from 'react';
import {Navbar} from "widgets/Navbar/ui/Navbar";
import {useTheme} from "./providers/ThemeProvider";
import './styles/index.scss'
import {Navigate, Route, Routes} from 'react-router-dom';
import {HomePage} from "pages/HomePage";
import {SettingsPage} from "pages/SettingsPage";
import {AuthPage} from "pages/AuthPage";
import {Auth} from "widgets/AuthFrom/ui/AuthForm";
import {getUserIsAuth, userActions} from "entity/User";
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const {theme} = useTheme()
    const isAuth = useSelector(getUserIsAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth') as string)
        if (!data || !data.accessToken || !data.refreshToken) {
            dispatch(userActions.userLogout)
        } else {
            dispatch(userActions.initUser())
        }
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={isAuth ? <h1>Files</h1> : <HomePage />} />
                    <Route path={'/registration'} element={isAuth ? <Navigate to={'/'} /> : <AuthPage type={Auth.REGISTRATION}/>} />
                    <Route path={'/login'} element={isAuth ? <Navigate to={'/'} /> : <AuthPage type={Auth.LOGIN}/>} />
                    <Route path={'/settings'} element={isAuth ? <SettingsPage /> : <Navigate to={'/login'} />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
