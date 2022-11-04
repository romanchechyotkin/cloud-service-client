import React, {FC, useState} from 'react';
import cls from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import LogoDark from 'shared/assets/LogoDark.svg'
import Avatar from 'shared/assets/avatar.png'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import {ModelWindow} from "widgets/ModelWindow";
import {useDispatch, useSelector} from "react-redux";
import {userActions, getUserIsAuth} from "entity/User";

interface NavbarProps {
    label?: string
}

export const Navbar: FC<NavbarProps> = ({label}) => {
    const [modelVisible, setModelVisible] = useState(false);
    const isAuth = useSelector(getUserIsAuth)
    const dispatch = useDispatch()

    const logoutUser = () => {
        setModelVisible(false)
        dispatch(userActions.userLogout())
    }

    const toggle = () => {
        setModelVisible(!modelVisible)
    }

    return (
        <nav className={cls.navbar}>
            <NavLink to={'/'}>
                <img src={LogoDark.toString()} alt="cloud-logo"/>
            </NavLink>
            {label} {/* for test stories*/}
            {isAuth ?
                <div onClick={toggle} className={cls.profile}>
                    <img className={cls.avatar} src={Avatar} alt="avatar"/>
                    {modelVisible ? <AiFillCaretUp className={cls.icon} /> : <AiFillCaretDown className={cls.icon} />}
                </div>
                :
                <NavLink to={'/login'} className={cls.login}>
                    Login
                </NavLink>
            }
            {isAuth && modelVisible && <ModelWindow setVisible={setModelVisible} logout={logoutUser} />}
        </nav>
    );
};

