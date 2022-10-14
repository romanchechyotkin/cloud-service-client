import React from 'react';
import cls from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import CloudLogo from '../../assets/cloud-logo.svg'

const Navbar = () => {
    return (
        <nav className={cls.navbar}>
            <NavLink to={'/'}>
                <img src={CloudLogo.toString()} alt="cloud-logo"/>
            </NavLink>
            <NavLink to={'/login'} className={cls.login}>
                Login
            </NavLink>
        </nav>
    );
};

export default Navbar;
