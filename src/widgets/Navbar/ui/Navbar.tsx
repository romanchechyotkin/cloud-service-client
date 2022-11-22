import React, {FC, useState} from 'react';
import cls from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import LogoDark from 'shared/assets/LogoDark.svg'
import defaultAvatar from 'shared/assets/avatar.png'
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import {ProfileWindow} from "widgets/ModelWindow";
import {useDispatch, useSelector} from "react-redux";
import {userActions, getUserIsAuth, getUser} from "entity/User";
import {getFile, getFilesFromServer, searchFiles} from "entity/File";
import {loaderActions} from "entity/Loader";

interface NavbarProps {
    label?: string
}

export const Navbar: FC<NavbarProps> = ({label}) => {
    const [modelVisible, setModelVisible] = useState(false);
    const isAuth = useSelector(getUserIsAuth)
    const {commonDir} = useSelector(getFile)
    const [searchName, setSearchName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(false)
    const {currentUser} = useSelector(getUser)
    const dispatch = useDispatch()

    const userAvatar = currentUser?.avatar ? `${process.env.REACT_APP_SERVER_URL}/${currentUser.avatar}` : defaultAvatar

    const logoutUser = () => {
        setModelVisible(false)
        dispatch(userActions.userLogout())
    }

    const toggle = () => {
        setModelVisible(!modelVisible)
    }

    function searchChangeHandler(e: any) {
        setSearchName(e.target.value)
        if (searchTimeout != false) {
            // @ts-ignore
            clearTimeout(searchTimeout)
        }
        dispatch(loaderActions.closeLoader())
        if(e.target.value != '') {
            // @ts-ignore
            setSearchTimeout(setTimeout((value) => {
                // @ts-ignore
                return dispatch(searchFiles(value));
            }, 500, e.target.value))
        } else {
            // @ts-ignore
            dispatch(getFilesFromServer({dirId: commonDir}))
        }
    }

    return (
        <nav className={cls.navbar}>
            <NavLink to={'/'}>
                <img src={LogoDark.toString()} alt="cloud-logo"/>
            </NavLink>
            {isAuth &&
                <input
                    value={searchName}
                    onChange={e => searchChangeHandler(e)}
                    type="text"
                    placeholder={'введите название файла'}/>
            }
            {isAuth ?
                <div onClick={toggle} className={cls.profile}>
                    <img className={cls.avatar} src={userAvatar} alt="avatar"/>
                    {modelVisible ? <AiFillCaretUp className={cls.icon} /> : <AiFillCaretDown className={cls.icon} />}
                </div>
                :
                <NavLink to={'/login'} className={cls.login}>
                    Login
                </NavLink>
            }
            {isAuth && modelVisible && <ProfileWindow setVisible={setModelVisible} logout={logoutUser} />}
        </nav>
    );
};

