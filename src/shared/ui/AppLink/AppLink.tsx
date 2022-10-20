import React from "react";
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps{
    className?: string;
    color?: string;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        color,
        ...otherProps
    } = props

    return (
        <Link
            style={{color}}
            to={to}
            {...otherProps}
            className={cls.AppLink}
        >
            {children}
        </Link>
    );
};
