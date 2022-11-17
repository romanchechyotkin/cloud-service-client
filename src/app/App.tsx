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
import {Disk} from "widgets/Disk";
import Alert from "../entity/Alert/ui/Alert";
import {getAlert} from "../entity/Alert";

const App = () => {
    const {theme} = useTheme()
    const isAuth = useSelector(getUserIsAuth)
    const dispatch = useDispatch()
    const {isAlertVisible} = useSelector(getAlert)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('auth') as string)
        if (!data || !data.accessToken || !data.refreshToken) {
            dispatch(userActions.userLogout)
        } else {
            const user = JSON.parse(localStorage.getItem('user') as string)
            dispatch(userActions.setUser(user))
            dispatch(userActions.initUser())
        }
    }, [dispatch]);

    const rightClick = (e: React.MouseEvent) => {
        if (e.type === "contextmenu") {
            e.preventDefault()
        }
    }

    return (
        <div onContextMenu={rightClick} className={`app ${theme}`}>
            <Navbar />
            <Suspense fallback={<div>loading...</div>}>
                <Routes>
                    <Route path={'/'} element={isAuth ? <Disk /> : <HomePage />} />
                    <Route path={'/registration'} element={isAuth ? <Navigate to={'/'} /> : <AuthPage type={Auth.REGISTRATION}/>} />
                    <Route path={'/login'} element={isAuth ? <Navigate to={'/'} /> : <AuthPage type={Auth.LOGIN}/>} />
                    <Route path={'/settings'} element={isAuth ? <SettingsPage /> : <Navigate to={'/login'} />} />
                </Routes>
            </Suspense>
            {isAlertVisible && <Alert />}
        </div>
    );
};

export default App;
